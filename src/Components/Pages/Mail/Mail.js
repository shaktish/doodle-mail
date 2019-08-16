import React, {useState } from 'react';
import { 
    Button,
    Container,
    Modal } 
    from 'react-bootstrap';
import Header from '../../Header/Header';

import logo from '../../../Assets/Images/logo.png';
import './Mail.css';

import {connect} from 'react-redux';

import SetActiveUserActionCreator from '../../../ActionCreators/SetActiveUserActionCreator';
import AddMessageActionCreator from '../../../ActionCreators/AddMessageActionCreator';

import Form from 'react-bootstrap/Form';
import {Typeahead} from 'react-bootstrap-typeahead'; 

function ComposeMail(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="btn block full-width" onClick={handleShow} >
          Compose Mail
        </Button>
  
        <Modal show={show} onHide={handleClose} backdrop={false} enforceFocus={false}>
          <Modal.Header closeButton>
            <Modal.Title>New Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ComposeMailForm 
            handleClose={handleClose}
            {...props}                
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }  

class ComposeMailForm extends React.Component {
    state = {
        from : this.props.activeUserEmail,
        to : '',
        subject : '',
        content : ''
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log('Mail sent')
        if(this.state.to !== "") {                
            this.props.addMessageHandler(this.state);                
            this.props.handleClose();
        } else {
            alert('Please specify at least one recipient.')
        }
    }

    recepientsChangeHandler = (selected) => {
        console.log(selected)
        const isObject = function(a) {
            return (!!a) && (a.constructor === Object);
        };


        if(isObject(selected)) {
            selected.forEach(el=>{
                console.log(true)
                this.setState({
                    to : el.label
                })
            })
           
        } else {
            console.log(false)
            this.setState({
                to : selected
            })
        }
        
    }

    
    render(){
        console.log(this.state, 'ComposeMailForm')
        return (
            <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formGroupReceipents" required>
                        <Typeahead
                            multiple
                            onChange={this.recepientsChangeHandler}
                            options={this.props.emailList()}
                            id="recipents"
                            selected={this.state.selected}
                            placeholder={'Recipient'}
                        />
                     </Form.Group>
                    <Form.Group controlId="formGroupSubject">
                        <Form.Control 
                            type="text"  
                            name="subject"    
                            placeholder="Subject"                         
                            value={this.state.subject} 
                            onChange={this.handleUserInput} />
                    </Form.Group>
                    <Form.Group controlId="formGroupContent">
                        <Form.Control 
                            as="textarea"
                            name="content"                            
                            value={this.state.content} 
                            rows="12"
                            onChange={this.handleUserInput} />
                    </Form.Group>
               
                    <div className="modal-footer">
                        <Button className="btn block" type="submit">
                            Send
                        </Button>
                    </div>
            </Form>
        )
    }
}


const MessageList = ({messages, view}) => {    
    return (
        <>
            {
                messages.reverse().map((message)=>{
                    console.log(message.to)
                    
                    return (
                        <div key={message.id} className="message-row">
                            {view === 'inbox' ? <p className="from">From: {message.from}</p> : <p className="from">To: {message.to.length > 1  ? message.to.join(', ') : message.to}</p> }

                            <p className="subject">Subject: {message.subject}</p>
                            <p className="content">Message: {message.content}</p>
                        </div>
                        )
                })
            }
        </>
        
    )
}

const filterMessages = ( list, property, value ) => {
    return list.filter(item=>{
        return item[property].includes(value);
    })
}

class Mail extends React.Component {
    state = {
        section : 'inbox'
    }

    changeInboxHandler = () => {
        console.log('Inbox');
        this.setState({
            section : 'inbox'
        })
    }

    changeSentHandler = () => {
        console.log('Sent');
        this.setState({
            section : 'sent'
        })
    }    

    MessageListView = () => {
      if(this.state.section === 'inbox') {
        return <MessageList 
                    messages = {filterMessages(this.props.messageList, 'to', this.props.activeUser.email)}
                    view={this.state.section}
                 />
      } else {
        return <MessageList 
                    messages = {filterMessages(this.props.messageList, 'from', this.props.activeUser.email)}
                    view={this.state.section}
                />
      }
    }

    GetFromMails = () => {
        return this.props.userList.map(user=>{
            return user.email
        })
    }

    render () {
        const {activeUser: user, userList } = this.props;
        return (
            <div>
                <Header 
                  logo={logo}  
                  profileImg={user.profileImg}
                  userName={user.firstName}
                  userList= {userList}
                  setActiveUserHander={this.props.setActiveUser}
                />
                <Container fluid>
                    <h3 className="lead-title">Dmail</h3>                
                    <div className="main-wrap">
                        <div className="sidebar">
                            <ComposeMail
                                addMessageHandler = {this.props.addMessage}
                                activeUserEmail={user.email}   
                                emailList={this.GetFromMails}                         
                            />
                            <div className="sidebar-links">
                                <button onClick={this.changeInboxHandler} className={this.state.section === 'inbox' ? 'active' : null }>Inbox</button>                            
                                <button onClick={this.changeSentHandler} className={this.state.section === 'sent' ? 'active' : null }>Sent</button>
                            </div>
                        </div>
                        <main>
                            <div className="message-block">
                                {this.MessageListView().props.messages.length > 0 ?  this.MessageListView() : <div className="message-row">{this.state.section === 'inbox' ? 'No new mail' : 'No sent mails'}!</div> }
                                                                                           
                            </div>
                        </main>
                    </div>
                </Container>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return state;
}

const mapDisptachToProps = (dispatch) => {
    return {
        setActiveUser : (user) =>{dispatch(SetActiveUserActionCreator(user))},
        addMessage : (message)  => {dispatch(AddMessageActionCreator(message))}
    }
}

const connectorComponent = connect(mapStateToProps, mapDisptachToProps);


export default connectorComponent(Mail);

//export default Mail;
