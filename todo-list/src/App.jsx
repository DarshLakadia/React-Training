// import './App.css'
import { useState } from 'react'
import ListForm from './components/ListForm'
import ListItem from './components/ListItem';

function App() {
  const [items, setItems]  = useState([]);

  const handleFormSubmit = (data) =>{
    const item = {
      id: crypto.randomUUID(),
      message: data
    } 
    setItems([...items, item]);
  }
  return (
    <>
    New ToDo
    <ListForm handleformsubmit = {handleFormSubmit}/>
    <ListItem items = {items} setItems = {setItems}/>
    </>
  )
}

export default App
