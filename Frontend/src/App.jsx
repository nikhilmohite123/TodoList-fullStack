import { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { v4 as uuid } from "uuid";

function App() {
  const [todoList, settodoList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:3000/todos");
      console.log(res.data);
      settodoList(res.data.todos);
    }

    fetchData();
  }, []);

  async function handleSubmit(newtodo) {
  
    const res = await axios.post("http://localhost:3000/todo", {
      title: newtodo,
      completed: false,
    });
    if(res.data.success){
      location.reload();
    }
  }
  async function toggleComplted(id) {
    const res = await axios({
      method: 'put',
      url: 'http://localhost:3000/completed',
      data: {
         id:`${id}`
      }
  })
  if(res.data.success){
    location.reload();
  }
  }

  async function removeTodo(id) {
    const res = await axios({
      method: 'delete',
      url: 'http://localhost:3000/remove',
      data: {
         id:`${id}`
      }
  })
  if(res.data.success){
    location.reload();
  }
  }

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-title">Todo List</h1>

      <TodoForm handleSubmit={handleSubmit} />
      <Todos
        todoList={todoList}
        toggleComplted={toggleComplted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
