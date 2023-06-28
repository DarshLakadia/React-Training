import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../style/ListForm.css'
import AddIcon from '@mui/icons-material/Add';
const ListForm = ({handleformsubmit}) => {
  const [input, setInputValue] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    handleformsubmit(input);
    setInputValue('');
  }

  return (
    <div>
      <Card>
      <Card.Header>New ToDo</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='form-group-container'>
              <Form.Control id='input-text' type="text"  onChange={(e) => setInputValue(e.target.value)} value={input}/>
              <button type="submit" className=" btn btn-primary add-button d-flex">Add <AddIcon /></button>
            </Form.Group>
          </Form>
      </Card.Body>
      </Card>
    </div>
  )
}

export default ListForm
