import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addTodo,
  removeTodo,
} from "./features/todos/todoSlice";

function App() {
  const [todoText, setTodoText] = useState("");
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!todoText.trim()) {
      return;
    }

    dispatch(addTodo(todoText));

    setTodoText("");
  };

  return (
    <div>
      <h1>Redux Todo App</h1>

      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter todo"
      />

      <button style = {{margin: "10px"}} onClick={handleAddTodo}>
        Add Todo
      </button>

      <hr />

      <h2>Todos</h2>

      {todos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}

              <button style = {{margin: "10px"}}
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
