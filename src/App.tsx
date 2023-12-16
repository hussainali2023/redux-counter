import { RootState } from './redux/store'
import './App.css'
import { useDispatch, useSelector} from "react-redux"
import { decrement, increment } from './features/counter/counterSlice'

function App() {

  const count = useSelector((state:RootState) =>state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <span>{count}</span>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
        
    </>
  )
}

export default App
