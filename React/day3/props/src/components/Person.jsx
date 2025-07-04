import React from 'react'

// Another way to replace props = {username,color, work}
// and <h1>{username}</h1>do not use props
export default function Person(props) {
    return (
        <>
            <div>
                <h1>This is person component</h1>
                <h1>{props.username}</h1>
                <h2>{props.color}</h2>
                <h2>{props.work}</h2>
            </div>
        </>
    )
}
