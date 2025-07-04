import React from 'react'
import Person from './components/Person'
import Card from './components/Card'

export default function App() {
  let data = {
    name: "The Fire",
    band: "The best band",
    num: 1,
    year: 2029,
    img:"https://tailwindcss.com/_next/static/media/cover.de1997f7.png"
  }
  let year = 2025
  return (
    <>
      <div>
        <h1 className='text-red-800 text-4xl'>Hello</h1>
        <button className='bg-blue-600 rad'>Click</button>
        <Person username='Vishal' color='blue' work='Developer' />
        <div className='flex flex-row p-7 items-center'>
          <Card name={data.name} band={data.band} num={data.num} year={data.year} img={data.img} />
          <Card name={data.name} band={data.band} num={data.num} year={data.year} img={data.img} />
          <Card name='Class Warfare' band='The Anti-Patterns' num="4" year='2025' img="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
          <Card name='Class Warfare' band='The Anti-Patterns' num="4" year='2025' img="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
        </div>

      </div>
    </>
  )
}
