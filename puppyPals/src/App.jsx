import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

function handleClick() {
  {()=>{console.log("puppy id: ", puppy.id)}}
}
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  return (
    <>
      <div className="App">
          { 
            puppies.map((puppy) => {
              return (
                <div>
                  <h2>{featuredPup.name}</h2>
                  <ul>
                    <li>Age: {featuredPup.age}</li>
                    <li>Email: {featuredPup.email}</li>
                  </ul>
                </div>
              )}
          )}
      </div>
    </>
  )
}

export default App
