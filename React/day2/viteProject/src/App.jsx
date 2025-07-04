import React from 'react'

export default function App() {
  let a = 10
  let b = "Vishal " + true
  let c = true
  let arr = ['a', 'b', 'c', 2]
  let obj = {
    name: "vishal",
    age: 21,
    city: "Rajkot"
  }
  return (
    <div>
      <h1>a</h1>
      <h1>"a"</h1>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{JSON.stringify(c)}</h1>
      {/* <h1>{arr}</h1> */}
      {/* {
        arr.map((item, index) => {
          return <h1>{item}</h1>
        })
      } */}
      {
        Object.entries(obj).map(([key, value]) => {
          return <h1>{key}:{value}</h1>
        })
      }
    </div>
  )
}
