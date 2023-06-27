import { useState } from "react";

const ListForm = ({handleformsubmit}) => {
  const [input, setInputValue] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    handleformsubmit(input);
    setInputValue('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input id='input-text' type="text"  onChange={(e) => setInputValue(e.target.value)} value={input}/>
      <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default ListForm
