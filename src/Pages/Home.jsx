import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

let Home = ({ setInloggad, användare}) => {
    
    let [inputAnvändarnamn, setInputAnvändarnamn] = useState('')
    let [inputLösenord, setInputLösenord] = useState('')
    let navigate = useNavigate()


    let inloggningsbehörig =()=>{
        användare.map((user, i)=>{
            if(user.användarnamn === inputAnvändarnamn && user.lösenord === inputLösenord){
                setInloggad(true)
                localStorage.setItem('inloggadAnvändare', JSON.stringify(user.användarnamn))
                navigate('/Inloggad')
            } else {
                setInloggad(false)   
            }})}

    return(
        <>
        
        <h1>Logga in</h1>
        <input type="text" placeholder="Användarnamn" onChange={(e) => setInputAnvändarnamn(e.target.value)} />
        <input type="password" placeholder="Lösenord" onChange={(e) => setInputLösenord(e.target.value)}/>
        <button onClick={inloggningsbehörig}>Logga in</button>
        
        <Link to="/registrera"><p>Registrera dig</p></Link>
        </>
    )
}

export default Home