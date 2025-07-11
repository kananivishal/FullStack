import React, { useState } from 'react'
import Child from './Child'

function Memo() {

    console.log("parent rendering")
    let [count, setCount] = useState(0)

    return (
        <>
            <div>
                <h1>
                    Count:{count}
                </h1>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
            <br />
            <Child username={count >= 2? "Vishal":"Kanani"}/>
        </>
    )
}

export default Memo
