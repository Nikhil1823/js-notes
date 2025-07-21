import { useState } from 'react'

import './App.css'
import Welcome from './WelcomeClass'
import styles from "./WelcomeClass.module.css";
function App() {
  const [count, setCount] = useState(0)
  const greetMe=(name)=>{
    alert(`Hello ${name}`)
  }

  return (
    <>
   <Welcome name="manu" greetHandler={greetMe}/>

    </>
  )
}

export default App
