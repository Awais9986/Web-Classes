import React, { createContext, useContext, useState } from 'react'
import { CounterContext } from './Context/CounterContext'

function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <Parent/>
    </div>
  )
}
export default App
function Parent() {
  const [counter, setCounter] = useState(0)
    return <div className='flex items-center justify-center flex-col gap-10'>
      <CounterContext.Provider value={{counter, setCounter}}>

        <Text/>
        <Button/>
      </CounterContext.Provider>
    </div>
}

function Button() {
    const {counter, setCounter} = useContext(CounterContext)
    return <button className='text-xl'
      onClick={()=>{
        setCounter(counter + 1)
      }}
    >increment</button>
}

function Text() {
  const {counter} = useContext(CounterContext)
    return <div className='text-2xl'>{counter}</div>
}





