import { RootState } from './redux/store'
import './App.css'
import { useSelector} from "react-redux"

function App() {

  const count = useSelector((state:RootState) =>state.counter.count)
  // const dispatch = useDispatch()

  return (
    <>
    <button>Increment</button>
    <span>{count}</span>
    <button>Decrement</button>
        
    </>
  )
}

export default App
