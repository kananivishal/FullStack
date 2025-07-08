import React, { useEffect, useState } from 'react'

function Clock() {

    let [time, setTime] = useState(0)

    useEffect(() => {
        let id = setInterval(() => {
            console.log("Interval Running", time)
            setTime(prev => prev + 1)
        }, 1000)
        return () => {
            console.log("cleaning running")
            clearInterval(id)
        }
    }, [time])


    return (
        <>
            <div className='text-center text-2xl font-semibold text-blue-600 bg-white p-4 rounded-md w-60 mx-auto mt-10'>Timer:{time}</div>
        </>

    )
}

export default Clock
