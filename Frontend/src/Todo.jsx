import React from 'react'
import { ImCross } from "react-icons/im"
function Todo({_id:id,title,completed,toggleComplted,removeTodo}) {
  return (
    <div className="todo">
        <div className="todo-title">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => {
                  toggleComplted(id);
                }}
            />
            <p className={`${completed ? "completed" : ""}`}>{title}</p>
        </div>
        <div className="cross-btn" onClick={() => removeTodo(id)}>
            <ImCross />
        </div>
    </div>
);
}

export default Todo