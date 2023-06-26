import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      // console.log('Decreasing', prev );
      return   prev != 0 ? prev -= 1 : prev
    })
  }
  return (
    <>
      <h2>Hello from App Component</h2>
      <button onClick={increaseCount}>+</button>
      <div>{count}</div>
      <button onClick={decreaseCount}>-</button>
    </>
  )
}

export default App
