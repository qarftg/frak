import React from 'react'
import { useState } from 'react';

export default function TodoBlock() {

    const [tasks, setTasks] = useState([])
    const [valueInput, setValueInput] = useState("")
    function addNewTasks(e) {
        e.preventDefault()
        const newObj = {
            title: valueInput,
            id: tasks.length > 0 ? Math.max(...tasks.map((item) => item.id)) + 1 : 1,
        }
        setTasks((prev) => [...prev, newObj])
    }
    function deleteTask(key) {
        console.log(key);
        setTasks(tasks.filter(task => task.id !== key))
        console.log(tasks);
    }

  return (
    <div>
        <form action="" onSubmit={addNewTasks}>
            <input type="text" placeholder='Add new task' onChange={(e) => setValueInput(e.target.value)} />
            <button type='submit' className='cursor-pointer'>Add</button>
        </form>
        <div>
            {
                tasks.length > 0 ? 
                <ul>{tasks.map((task) => (
                    <li key={task.id}>
                        {task.title}

                        <button onClick={() => deleteTask(task.id)} className='cursor-pointer'>Дезентыграция</button>
                    </li>
                ))}</ul>:
                <div>Nine tasks</div>
            }
        </div>
    </div>
  )
}
