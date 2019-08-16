import React from 'react';
import { 
    Button 
} 
    from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Typeahead} from 'react-bootstrap-typeahead';     
import './ComposeMail.css';

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
        if(this.state.to !== "") {                
            this.props.addMessageHandler(this.state);                
            this.props.handleClose();
        } else {
            alert('Please specify at least one recipient.')
        }
    }

    recepientsChangeHandler = (selected) => {
        const isObject = function(a) {
            return (!!a) && (a.constructor === Object);
        };


        if(isObject(selected)) {
            selected.forEach(el=>{
                this.setState({
                    to : el.label
                })
            })
            
        } else {
            this.setState({
                to : selected
            })
        }
        
    }

    
    render(){
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


export default ComposeMailForm;