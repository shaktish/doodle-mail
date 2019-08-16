import React from 'react';
import { 
    Col,
    Button } 
    from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CreateUserForm.css'


class CreateUserForm extends React.Component {
    state = {
        firstName : '',
        lastName : '',
        email : '',
        mobile : '',
        profileImg : ''
    }

    emailInputRef = React.createRef();

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        const email = this.state.email;
        const userList = this.props.userList;

        const emailAlreadyExists = userList.filter(user=>{                
            return user.email.includes(email)                        
    })

        if(emailAlreadyExists.length > 0) {
            alert('Email already exists, Try another.');
            this.emailInputRef.current.focus();
        } else {
            this.props.addUserHandler(this.state);
            this.props.history.push('/') 
        }
              
    }
    
    render () {        
        return (
            <Form onSubmit={this.submitHandler}>
                <div className="form-bg">
                    <Form.Row>
                        <Form.Group as={Col} xs="12" sm="6"  controlId="formGroupFirstName">
                            <Form.Label>First Name*</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="firstName"  
                                spellCheck="false"  
                                required
                                onChange={this.handleUserInput} 
                                value={this.state.firstName} />
                        </Form.Group>

                        <Form.Group as={Col}  xs="12" sm="6" controlId="formGroupLastName">
                            <Form.Label>Last Name*</Form.Label>
                            <Form.Control 
                                type="text"  
                                name="lastName"  
                                spellCheck="false"
                                required                           
                                value={this.state.lastName} 
                                onChange={this.handleUserInput} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}  xs="12" sm="6" controlId="formGroupEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control
                                type="email" 
                                name="email"   
                                spellCheck="false"
                                required                          
                                value={this.state.email}
                                onChange={this.handleUserInput} 
                                ref={this.emailInputRef}  />
                        </Form.Group>

                        <Form.Group as={Col}  xs="12" sm="6" controlId="formGroupMobile">
                            <Form.Label>Mobile Phone*</Form.Label>
                            <Form.Control type="number"
                                name="mobile" 
                                spellCheck="false"
                                required
                                value={this.state.mobile}
                                onChange={this.handleUserInput}   />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row> 
                        <Form.Group as={Col}  xs="12" sm="6" controlId="formGroupProfileImage">
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control 
                                type="file" 
                                name="profileImg"                                 
                                value={this.state.profileImg}
                                onChange={this.handleUserInput}   />
                        </Form.Group>
                    </Form.Row>
                </div>
                <div style={{justifyContent:'center', display:'flex'}}>
                    <Button className="btn block" type="submit">
                        Add
                    </Button>
                </div>
            </Form>
        );
    }
}

export default CreateUserForm;