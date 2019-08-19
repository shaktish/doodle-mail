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

import {NavLink} from 'react-router-dom';




class Mail extends React.Component {
    state = {
        view : this.props.view,
        mobile : false
    }


    GetEmailList = () => {
        return this.props.userList.map(user=>{
            return user.email
        })
    }

    componentDidMount() {
        document.title = this.state.view;
        window.addEventListener("resize", this.resize());
        this.resize();
    }

    componentDidUpdate() {
        if(this.state.view !== this.props.view) {
            this.setState({
                view : this.props.view
            }, ()=>{
                document.title = this.state.view;
            })
            
        }
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
        

        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                //view:this.state.section,
                ...this.props,
                messageList: this.props.messageList,
                receipient: receipient,
                activeUserEmail:this.props.activeUser.email
            });
        });


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
                                mobileView= {this.state.mobile}
                            />
                            <div className="sidebar-links">
                                <NavLink to="/inbox">Inbox</NavLink>
                                <NavLink to="/sent">Sent</NavLink>                               
                            </div>
                        </div>
                        <main>
                            {children}
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

