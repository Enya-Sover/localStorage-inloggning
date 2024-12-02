import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

let Inloggad = () => {

  let inloggad =  JSON.parse(localStorage.getItem('inloggadAnvändare'))
  let inloggadNyckel = `${inloggad}`
  let [todos, setTodos] = localStorage.getItem(inloggadNyckel) ? useState(JSON.parse(localStorage.getItem(inloggadNyckel))) : useState([])
  let [newTodo, setNewTodo] = useState('')

  let addTodo = () => {
    const  updatedTodos = [...todos, newTodo]
    localStorage.setItem(inloggadNyckel, JSON.stringify(updatedTodos))
      setTodos(updatedTodos)
    }
  
  return (
    <>
    <h1>{`Lägg till info ${inloggad}`}</h1>
      <h2>Lägg till mer info!</h2>
      
      <input type="text" placeholder="Skriv vad du vill" onChange={(e) => setNewTodo(e.target.value)}/>
      <button onClick={addTodo}>Lägg till info</button>
      <h3>Ny info:</h3>
      <ul>
        {todos.map((todo, i) => <li key = {i}>{todo}</li>)}
      </ul>
      <br />
      
      <Link to="/">Home</Link>
    </>
  )
}

export default Inloggad
