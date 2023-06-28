import React from "react";
import ModalDialog from "./ModalDialog";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import '../style/ListItem.css'
  function ListItem({id, checked, message, handleDelete, handleChecked, handleEdit,items}) {
  
  return(
    <div className="item-container">
      <Card>
        <Card.Body>
      <div className="item-message-container">
        <div className="item-message-left-container">
          <input 
            style={{display: 'inline-block'}} 
            type="checkbox" checked={checked} 
            onChange={(e) => {handleChecked(id, e.target.checked)}}
          />
          <p className="to-do-message" title={message}>{message}</p>
        </div>
        <div className="item-message-right-container">
          <ModalDialog 
            id={id} 
            message={message} 
            handleEdit = {handleEdit}
          />
          <Button variant='danger small' size="sm" onClick={() => {handleDelete(id)}}>
            <DeleteIcon/>
          </Button>
        </div>
      </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ListItem;