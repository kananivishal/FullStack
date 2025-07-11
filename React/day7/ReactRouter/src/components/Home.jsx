import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate()

  function handleClick(){
    navigate('/about')
  }

  return (
    <div>
      <h1>This Is Home</h1>
      <button onClick={handleClick}>Click to navigate about</button>
    </div>
  )
}

export default Home
