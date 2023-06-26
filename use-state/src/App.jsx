import { useState } from 'react'
import './App.css'
import List from './components/List.jsx';
import toDo from './assets/todo.json';

function App() {
  const [count, setCount] = useState(() => initialCount())
  function initialCount() {
    console.log('initial count');
    return 0 
  }

  const increaseCount = () => {
    
    setCount((prev) => prev += 1)
  }
  const decreaseCount = () => {
    setCount((prev) => {
      return   prev != 0 ? prev -= 1 : prev
    })
  }
  return (
    <>
      <h2>Hello from App Component</h2>
      <button onClick={increaseCount}>+</button>
      <div>{count}</div>
      <button onClick={decreaseCount}>-</button>
      <List  todo= {toDo}/>
    </>
  )
}

export default App
