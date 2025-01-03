import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import AddTodo from './components/AddTodo'
import SimpleTodo from './components/SimpleTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-900 text-white text-center p-4'>
    <AddTodo/>
    <SimpleTodo/>
    </div>
      
    </>
  )
}

export default App
