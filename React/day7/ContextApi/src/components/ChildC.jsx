import React, { useContext } from 'react'
import { userContext } from '../App'

function ChildC() {

    const user = useContext(userContext)
    return (
        <>
            <div>

                <div>Child kon hai:{user.name}</div>
            </div>
        </>
    )
}

export default ChildC
