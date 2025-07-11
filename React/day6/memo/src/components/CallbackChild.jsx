import React from 'react'

function CallbackChild({onClick}) {
    console.log("Child rendering")
    // console.log(params.click)
    return (
        <>
            <div>
                <h1>Callback Child Component</h1>
                <button onClick={onClick}>Click Child</button>
            </div>

        </>
    )
}

export default React.memo(CallbackChild)
