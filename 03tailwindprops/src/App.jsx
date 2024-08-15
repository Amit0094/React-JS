import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : 'Amit',
    age:19
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-2xl mb-5'>Tailwind CSS</h1>

      <Card username='chaiAurCode' btnText = 'Click me' />
      <Card username='Amit Pal' />

    </>
  )
}

export default App
