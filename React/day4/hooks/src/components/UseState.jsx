import React, { useState } from 'react'

export default function UseState() {

    let [count, setCount] = useState(0)
    const addValue = () => {
        // count += 1
        setCount(count + 1)
        console.log("my count is:" + count)
    }
    const removeValue = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    // let [bgColor, setColor] = useState("bg-red-700")
    // const changeColor = () => {
    //     setColor(bgColor == "bg-red-700" ? "bg-blue-700" : "bg-red-700")
    // }

// when we update state multiple time in the same function react groups those updates together and process as a single update

    return (
        <>
            {/* <div className={`flex flex-col items-center justify-center h-screen`}> */}

                {/* <button onClick={changeColor} className='bg-yellow-500'>Change Color</button> */}

                <h1>Counter App</h1>
                <h1>Counte is:{count}</h1>
                <button onClick={addValue}>Increase</button>
                <button onClick={removeValue}>Decrease</button>
            {/* </div> */}
        </>
    )
}
