import { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {};

  const handleDelete = () => {};

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    console.log(e, e.target)
    let id = e.target.value;
    console.log(`The id is ${id}`)
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    console.log(index)
    let newTodos = todos;
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-gray-500 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-80"
          />
          <button
            onClick={handleAdd}
            className="bg-gray-800 hover:bg-gray-950 text-sm font-bold p-3 py-1 text-white rounded-md mx-6"
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.map((item) => {
            return (
              <div
                key={todo.id}
                className="todo flex my-4 w-1/2 justify-between"
              >
                <input
                  name={todo.id}
                  onChange={handleCheckbox}
                  type="checkbox"
                  value={todo.isCompleted}
                  id=""
                />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons">
                  <button
                    onClick={handleEdit}
                    className="bg-gray-800 hover:bg-gray-950 text-sm font-bold p-3 py-1 text-white rounded-md mx-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-gray-800 hover:bg-gray-950 text-sm font-bold p-3 py-1 text-white rounded-md mx-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
