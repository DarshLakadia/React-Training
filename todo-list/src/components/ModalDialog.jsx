import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EditIcon from '@mui/icons-material/Edit';

function ModalDialog({id, message, handleEdit}) {
  const [show, setShow] = useState(false);
  const [input,setInput ] = useState(message);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='success small' size="sm" onClick={handleShow}>
        <EditIcon style={{ color: "white" }}/>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ToDo</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value = {input}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleEdit(id,input); handleClose()}}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDialog;