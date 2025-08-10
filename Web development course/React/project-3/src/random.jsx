import React, { useContext, useState } from 'react'
import { CounterContext } from './Context/CounterContext'
function App() {
      const [counter, setCounter] = useState(0)
  return (
    <div className='flex items-center justify-center h-screen'>
      <Parent counter={counter} setCounter={setCounter}/>
    </div>
  )
}
export default App
function Parent({counter, setCounter}) {
  return <div className='flex items-center justify-center  flex-col'>
    <Text counter={counter}/>
    <Button setCounter={setCounter} counter={counter}/>
  </div>
}

function Button({setCounter, counter}) {

  return <button className='text-xl'
  
    onClick={()=>{
      setCounter(counter + 1)
    }}
  
  >Increment</button>
}

function Text({counter}) {
  return <p className='text-2xl'>{counter}</p>
}

