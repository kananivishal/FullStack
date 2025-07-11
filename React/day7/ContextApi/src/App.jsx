import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

// Step-1 --> Create context for user
const userContext = createContext()

function App() {
  const [user, setUser] = useState({name:"Vishal Kanani"})

  return (
    <>
      <div>
        <userContext.Provider value={user}>
          <ChildA />
        </userContext.Provider>
      </div>
    </>
  )
}

export default App
export {userContext}