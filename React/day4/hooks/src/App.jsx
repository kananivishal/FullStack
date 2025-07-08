import React, { useRef, useState } from 'react'
import UseState from './components/UseState'
import BgChanger from './components/BgChanger'
import UseEffect from './components/UseEffect'
import Timer from './components/Timer'
import Clock from './components/Clock'

export default function App() {

  let [showTimer, setShowTimer] = useState(true)
  // let [pushTimer, setPushTimer] = useRef(true)
  let [stopTimer, setStopTimer] = useState(false)


  return (
    <>
      <div className='text-center mt-10'>

        {/* <UseState /> */}
        {/* <BgChanger /> */}
        {/* <UseEffect/> */}

        <button onClick={() => setShowTimer(showTimer)} className='bg-blue-600 text-white px-4 py-2 rounded'>{"start timer"}</button>
        {/* <button onClick={() => setPushTimer(pushTimer)} className='bg-blue-600 text-white px-4 py-2 rounded'>{"push timer"}</button> */}
        <button onClick={() => setStopTimer(stopTimer)} className='bg-red-600 text-white px-4 py-2 rounded'>{"stope timer"}</button>
        {showTimer && <Clock />}
        {stopTimer && !stopTimer && <Clock />}
        {/* {showTimer && <Clock />}
        {showTimer && <Clock />} */}

      </div>
      {/* <Clock /> */}
    </>
  )
}
