
import './App.css'
import Home from './Pages/Home'
import Inloggad from './Pages/Inloggad'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Registrera from './Pages/Regitrera'

function App() {
  let navigate = useNavigate()
  let [användare, setAnvändare] = localStorage.getItem('Person') ? useState(JSON.parse(localStorage.getItem('Person'))) : useState([{användarnamn: 'admin', lösenord: 'password'}])

  let läggTillAnvändare =(användarnamn, lösenord)=>{
    let user = {
      användarnamn: användarnamn,
      lösenord: lösenord
    }  
    //Some() loopar igenom arrayen och returnerar true om användarnamnet finns i arrayen, annars false
    const upptaget = användare.some(user => user.användarnamn === användarnamn)
    const updatedUser = [...användare, user]
    !upptaget && localStorage.setItem('Person', JSON.stringify(updatedUser))
    setAnvändare(updatedUser)
    navigate('/')
  }

  let [inloggad, setInloggad] = useState(false)


  return (
    <>
       <Routes>
        <Route path="/" element={<Home inloggad={inloggad} setInloggad={setInloggad} användare={användare} />}/>
        <Route path = "/registrera" element={<Registrera läggTillAnvändare={läggTillAnvändare} användare={användare} setAnvändare={setAnvändare} />} />
        <Route path = "/inloggad" element={<Inloggad inloggad={inloggad} setInloggad={setInloggad} />}/>
        </Routes>
       

    </>
  )
}

export default App
