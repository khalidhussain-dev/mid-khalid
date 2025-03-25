import { useState } from 'react'
import CountDownSwitchLight from './component/CountDownSwitchLight'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>New React Project</h1> */}
      <CountDownSwitchLight />
    </>
  )
}

export default App
