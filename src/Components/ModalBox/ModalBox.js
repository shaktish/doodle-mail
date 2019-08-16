import React, {useState } from 'react';
import { 
    Button,
    Modal } 
    from 'react-bootstrap';

import ComposeMailForm from '../ComposeMail/ComposeMail'
import './ModalBox.css';

function ModalBox(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(props)
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
export default  ModalBox;