import React, { useCallback, useState } from 'react'
import CallbackChild from './CallbackChild'

function Callback() {
    console.log("Parent rendering")
    let[count, setCount] = useState(0)
    // let[childCount, setChildCount] = useState(0)
    const handleClick = useCallback(()=>{
        setCount(count= count+1)
    },[count])
    return (
        <>
            <div>
                <h1>
                    Count:{count}
                </h1>
                {/* <h1>Child Click:{childCount}</h1> */}
                {/* <button onClick={handleClick}>Parent Increase</button> */}
            </div>
            <CallbackChild onClick={handleClick}/>
        </>
    )
}

export default Callback
