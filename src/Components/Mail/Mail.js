import React from 'react';
import { 
    Container 
} 
   from 'react-bootstrap';
import './Mail.css';
import logo from '../../Assets/Images/logo.png';
import {connect} from 'react-redux';

/* Action Creators */
import SetActiveUserActionCreator from '../../ActionCreators/SetActiveUserActionCreator';
import AddMessageActionCreator from '../../ActionCreators/AddMessageActionCreator';

/* IMPORT COMPONENTS */
import Header from '../Header/Header';
import ModalBox from '../ModalBox/ModalBox';
import MessageListContainer from '../MessageListContainer/MessageListContainer';



class Mail extends React.Component {
    state = {
        section : 'inbox',
        mobile : false
    }

    changeInboxHandler = () => {
        this.setState({
            section : 'inbox'
        })
    }

    changeSentHandler = () => {
        this.setState({
            section : 'sent'
        })
    }    

    GetEmailList = () => {
        return this.props.userList.map(user=>{
            return user.email
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize());
        this.resize();
    }

    resize = () => {
        this.setState({mobile: window.innerWidth <= 768});
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize());
    }
    

    render () {
        const {activeUser: user, userList } = this.props;
        const receipient = this.state.section === 'inbox' ? 'to' : 'from';
        return (
            <div>
                <Header 
                  logo={logo}  
                  profileImg={user.profileImg}
                  userName={user.firstName}
                  userList= {userList}
                  setActiveUserHander={this.props.setActiveUser}
                  addUserText={this.state.mobile ? '+' : 'Create User'}
                />
                <Container fluid>
                    <h3 className="lead-title">Dmail</h3>                
                    <div className="main-wrap">
                        <div className="sidebar">
                            <ModalBox 
                                modalTitle={'New Message'}
                                modalButtonText={'Compose Mail'}
                                addMessageHandler = {this.props.addMessage}
                                activeUserEmail={user.email}   
                                emailList={this.GetEmailList}   
                            />
                            <div className="sidebar-links">
                                <button onClick={this.changeInboxHandler} className={this.state.section === 'inbox' ? 'active' : null }>Inbox</button>                            
                                <button onClick={this.changeSentHandler} className={this.state.section === 'sent' ? 'active' : null }>Sent</button>
                            </div>
                        </div>
                        <main>
                            <div className="message-block">
                                    <MessageListContainer                                                                        
                                        view={this.state.section}
                                        messageList= {this.props.messageList}
                                        receipient= {receipient}
                                        activeUserEmail={this.props.activeUser.email}
                                    />
                                   
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

