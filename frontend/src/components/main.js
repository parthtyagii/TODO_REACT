import React, { useId } from 'react'
import Addtask from './addtask'
import './main.css'
import { useState } from 'react';
import { MdDelete } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'
import uuid from 'react-uuid';

export default function Main() {
    const data = [
        { id: uuid(), task: "Khana khana h.", done: false },
        { id: uuid(), task: "Project Complete karna h phir.", done: false },
        { id: uuid(), task: "DBMS padhna h.", done: false },
        { id: uuid(), task: "Computer Networks bhi toh padhni h.", done: false }
    ];;

    const [showMiddle, setShowMiddle] = useState(false);
    const [showAddBtn, setShowAddBtn] = useState(true);
    const [tasks, setTasks] = useState(data);

    const handler = () => {
        setShowMiddle(!showMiddle);
        setShowAddBtn(!showAddBtn);
    }

    const deleteHandler = (task) => {
        const newData = tasks.filter((t) => t.task !== task);
        setTasks(newData);
    }

    const checkHandler = (id) => {
        const newData = tasks.map((t) => {
            if (t.id === id) {
                t.done = !t.done;
                return t;
            }
            return t;
        })
        console.log(newData);
        setTasks(newData);
    }

    const tasksDisplay = () => {
        return (tasks.map((d) => {
            return (
                <div className="task" key={d.id}>
                    <div className="completion">
                        <input type="checkbox" className='form-check-input' onChange={() => checkHandler(d.id)} />
                        <span style={d.done ? { textDecoration: 'line-through', color: '#B2B2B2' } :  null}>{d.task}</span>
                    </div>
                    <ul>
                        <li><button className="btn btn-info" onClick={() => deleteHandler(d.task)}><MdDelete /></button></li>
                        <li><button className="btn btn-info"><MdEdit /></button></li>
                    </ul>
                </div>
            );
        })
        );
    }

    return (
        <main>
            <div className="container">
                {showAddBtn &&
                    <div className="upperPart">
                        <button className="btn btn-info" onClick={handler}>Add Task</button>
                    </div>
                }

                {showMiddle && <Addtask handler={handler} tasks={tasks} setTasks={setTasks} />}

                <div className="lowerPart">
                    {
                        tasks.length ? tasksDisplay() : <div className="task"><img src="https://memes.co.in/Uploads/Media/Oct21/Sun17/589/34071aed.jpg" alt="mene" /></div>
                    }
                </div>
            </div>
        </main >
    );
}
