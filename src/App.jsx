import { useState } from 'react'
import './index.css'
import AddTodo from './components/AddTodo'
import SimpleTodo from './components/SimpleTodo'

function App() {

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
