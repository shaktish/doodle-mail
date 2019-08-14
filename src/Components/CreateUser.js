import React from 'react';
import { 
    Col,
    Button } 
    from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

class CreateUser extends React.Component {
    render () {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name*</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="email"  />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Mobile Phone</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                </Form.Row>
                <Form.Row> 
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Profile Image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Form.Row>

                <div style={{justifyContent:'center', display:'flex'}}>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </div>
            </Form>
        );
    }
}

export default CreateUser;