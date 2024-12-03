import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import './inloggad.css'

let Inloggad = () => {
  let inloggad = JSON.parse(localStorage.getItem("inloggadAnvändare"));
  let inloggadNyckel = `${inloggad}`;
  let [todos, setTodos] = localStorage.getItem(inloggadNyckel)
    ? useState(JSON.parse(localStorage.getItem(inloggadNyckel)))
    : useState([]);
  let [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem(inloggadNyckel, JSON.stringify(todos));
  }, [todos]);

  let addTodo = () => {
    const updatedTodos = [...todos, newTodo];
    todos.includes(newTodo) ? alert('Todo finns redan') : setTodos(updatedTodos)
  };

  const deleteTodo = (index) => {
    const filteredTodo = todos.filter((_, e) => e != index);
    setTodos(filteredTodo);
  };
  let capitalizeFirstLetter = (letter) => letter.charAt(0).toUpperCase() + letter.slice(1);
  
  return (
    <>
      <h1>{`Välkommen ${capitalizeFirstLetter(inloggad)}!`}</h1>
      <p><b>Vad vill du göra idag?</b></p>
      <input
        type="text"
        placeholder="Skriv vad du vill"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Lägg till info</button>
<br /><br />
      <div className="attGöraDiv">
      <h3>Detta ska jag göra:</h3>
      <ul>
        {todos.map((todo, i) => {
          return (
            <div key={i}>
              <li key={i}>{capitalizeFirstLetter(todo)}
              <button id= "knapp" onClick={() => deleteTodo(i)}>Delete</button>
              </li>
            </div>
          );
        })}
      </ul>
      </div>
      <br />

      <Link to="/">Home</Link>
    </>
  );
};

export default Inloggad;
