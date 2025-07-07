import React, { useState } from 'react'

export default function BgChanger() {
    const [color, setColor] = useState("")

    return (
        <>
            <div className='w-full h-screen flex flex-col items-center' style={{backgroundColor:color}}>
                <div className='fixed flex flex-wrap justify-center bottom-12 inset-ring-0'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
                        <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg' style={{ backgroundColor: 'red' }}>Red</button>
                        <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg' style={{ backgroundColor: 'blue' }}>Blue</button>
                        <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg' style={{ backgroundColor: 'Yellow' }}>Yellow</button>
                        <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg' style={{ backgroundColor: 'green' }}>Green</button>
                    </div>
                </div>
            </div>

        </>
    )
}
