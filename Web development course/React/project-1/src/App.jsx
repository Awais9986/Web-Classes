
import React from 'react'
import './App.css'
import AppBar from './components/AppBar'
import HeroSection from './components/HeroSection'
import HeroImage from './components/HeroImage'



function App() {
  return (
    <div className='main'>
      <div className='container'> 
            <AppBar
                listItems={["Guide", "price", "login", "signup", "contact"]}
                btnText={"Start free trial"}
            />

            <HeroSection btn1Text={"Start free trial"} btn2Text={"Pricing"}/>
            <HeroImage/>

      </div>
    </div>
  )
}

export default App








