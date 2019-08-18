import React from 'react';
import Container from 'react-bootstrap/Container'
import CreateUserForm from '../CreateUserForm/CreateUserForm';

import {connect} from 'react-redux';
import AddUserActionCreator from '../../ActionCreators/AddUserActionCreator';

import './CreateUser.css'
import doodlegif from '../../Assets/Images/doodle-gif.gif';
import {Link} from 'react-router-dom';


class CreateUser extends React.Component {

    addUserHandler = (userData) => {
        this.props.addUser(userData)
    }

    componentDidMount() {
        document.title = 'Create User';
    }
    render () {
        return (
            <Container>
                <div className="d-flex justify-content-center flex-column text-center">
                    <Link to="/"><img src={doodlegif} className="logo-gif" alt="D-mail logo"/></Link>
                    <h1 className="mb-3">Create User</h1>
                </div>
                <div className="form-wrap">
                    <CreateUserForm
                        addUserHandler={this.addUserHandler}
                        history ={this.props.history}
                        userList= {this.props.userList}
                    />
                 </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDisptachToProps = (dispatch) => {
    return {
        addUser : (data) => {dispatch(AddUserActionCreator(data))}
    }
}

const connectorComponent = connect(mapStateToProps, mapDisptachToProps);


export default connectorComponent(CreateUser);
