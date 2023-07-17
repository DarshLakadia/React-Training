import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { UserContext } from "../App";
import { Slide, toast } from "react-toastify";

function ModalDialog({ userId }) {
  const baseUrl = "https://reqres.in/api/users";
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { dispatch } = useContext(UserContext);

  const resetState = () => {
    setInput({});
  };
  const handleEdit = (userId) => {
    toast.promise(
      axios
        .patch(`${baseUrl}/${userId}`, {
          first_name: input.firstName,
          last_name: input.lastName,
          email: input.email,
        })
        .then((response) => {
          dispatch({
            type: "UPDATE_USER",
            payload: {
              userId: userId,
              firstName: response.data.first_name,
              lastName: response.data.last_name,
              email: response.data.email,
            },
          });
        })
        .catch((err) => {
          console.log(err.message);
        }),
      {
        pending: "User is updating",
        success: `${input.firstName} is updated successfully`,
        error: "Error updating user",
      },
      {
        autoClose: true,
        transition: Slide,
      }
    );
  };

  const handleCreate = () => {
    toast.promise(
      axios
        .post(`${baseUrl}/${userId}`, {
          first_name: input.firstName,
          last_name: input.lastName,
          email: input.email,
        })
        .then((response) => {
          dispatch({
            type: "CREATE_USER",
            payload: {
              userId: response.data.id,
              firstName: response.data.first_name,
              lastName: response.data.last_name,
              email: response.data.email,
            },
          });
        })
        .catch((err) => {
          console.log(err.message);
        }),
      {
        pending: "User is creating",
        success: "User is successfully created",
        error: "Error creating user",
      },
      {
        transition: Slide,
        autoClose: 2000,
      }
    );
  };
  useEffect(() => {
    if (userId !== undefined) {
      axios.get(`${baseUrl}/${userId}`).then((response) => {
        const data = response.data.data;
        setInput({
          firstName: data.first_name,
          email: data.email,
          lastName: data.last_name,
        });
      });
    }
  }, []);

  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={handleShow}>
        {userId !== undefined ? "Edit" : "Create User"}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {userId !== undefined ? `Update User` : "Create User"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setInput({ ...input, firstName: e.target.value })
                }
                value={input.firstName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setInput({ ...input, lastName: e.target.value })
                }
                value={input.lastName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                value={input.email}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
          {userId !== undefined ? (
            <Button
              variant="primary"
              onClick={() => {
                handleEdit(userId);
                handleClose();
              }}
            >
              Edit
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                resetState();
                handleCreate();
                handleClose();
              }}
            >
              Create
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDialog;
