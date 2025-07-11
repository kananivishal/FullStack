import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Memo from './components/memo'
import Callback from './components/Callback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Memo /> */}
      <Callback />
    </>
  )
}

export default App
