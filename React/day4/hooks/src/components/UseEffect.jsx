import React, { useEffect, useState } from 'react'

function UseEffect() {

  let [count, setCount] = useState(0)

  useEffect(() => {
    alert('hii i am vishal')
    console.log(count)
  }, [count])

  const addValue = () => {
    setCount(count+1)
  }

  return (
    <>
      <div>
        i am learning UseEffect
      </div>
      <div>Count is:{count}</div>
      <button onClick={addValue}>Click</button>
    </>
  )
}

export default UseEffect
