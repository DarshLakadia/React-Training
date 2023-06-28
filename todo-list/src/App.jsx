// import './App.css'
import { useEffect, useState } from 'react'
import ListForm from './components/ListForm'
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [items, setItems]  = useState(() => {
    const initialList = localStorage.getItem('list');
    if (!initialList){
      return [];
    } else{
      return JSON.parse(initialList);
    }
  })

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(items));
  }, [items]);

  const handleFormSubmit = (data) =>{
    const item = {
      id: crypto.randomUUID(),
      message: data,
      checked: false
    } 
    setItems([...items, item]);
  }
  return (
    <>
    <ListForm handleformsubmit = {handleFormSubmit} />
    <List items = {items} setItems = {setItems}/>
    </>
  )
}

export default App
