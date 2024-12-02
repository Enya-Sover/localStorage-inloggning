import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
let Registrera = ({läggTillAnvändare, användare, setAnvändare})=>{
const navigate = useNavigate();

let [användarNamn, setAnvändarNamn] = useState('')
let [lösenord, setLösenord] = useState('')



return (<>
    <h1>Registrera användare</h1>
    <input type="text" placeholder="Användarnamn" onChange={(e) => setAnvändarNamn(e.target.value)}/>
    <input type="password" placeholder="Lösenord" onChange={(e) => setLösenord(e.target.value)}/>
    <button onClick={()=> läggTillAnvändare(användarNamn, lösenord)}>Spara och logga in</button>
    
</>)
}

export default Registrera