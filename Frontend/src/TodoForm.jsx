import React, { useState } from 'react'
import { toast } from "react-toastify";
function TodoForm({handleSubmit}) {
    const[title,setTitle]=useState("");
  return (
    <div>
        <form action=""  className='todoForm' onSubmit={(e)=>{
            e.preventDefault();
            if (title.trim().length === 0) {
                toast.info("Please Fill input", {
                    autoClose: 2000,
                });
                return;
            }
            handleSubmit(title);
            setTitle("")
        }}>
            <input type="text" placeholder='Todo' className='todoForm__input' value={title}  onChange={(e)=>{
                setTitle(e.target.value);
            }}/>
            <button type='submit' className='todoForm__btn'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm