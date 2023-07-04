import { useContext } from "react"
import { CountContext } from '../App'
function ComponentA() {
  const countContext = useContext(CountContext);
  // console.log(countContext.countDispatch('increment'))
  return (
    <div>
      ComponentF
      <p>Count {countContext.countState}</p>
      <button onClick={() => countContext.countDispatch('increment')}>+</button>
      <button onClick={() => countContext.countDispatch('decrement')}>-</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
