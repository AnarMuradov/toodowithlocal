import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [local, setLocal] = useState(
    localStorage.getItem("local")
      ? JSON.parse(localStorage.getItem("local"))
      : ""
  );
  const [todo, setTodo] = useState(
    localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : []    
  );

  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(local));
  }, [local]);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const addTodo = () => {
    if (todo !== "") {
      setTodo([...todo, local]);
      setLocal("");
    }
  };

  const deletetodo = (text) => {
    const newtodos = todo.filter((local) => {
      return local !== text;
    });
    setTodo(newtodos);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul className="list">
        {todo.map((x, i) => (
          <div>
            <li key={i}>
              {x}
              <button
                className="deletetodo"
                onClick={() => {
                  deletetodo(x);
                }}
              >
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
