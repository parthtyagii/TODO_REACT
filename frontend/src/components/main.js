import React from 'react'
import Addtask from './addtask'
import './main.css'
import { useState } from 'react';

export default function Main() {
    const data = [
        "Khana khana h.",
        "Project Complete karna h phir.",
        "DBMS padhna h.",
        "Computer Networks bhi toh padhni h."
    ];;

    const [showMiddle, setShowMiddle] = useState(false);
    const [showAddBtn, setShowAddBtn] = useState(true);
    const [tasks, setTasks] = useState(data);

    const handler = () => {
        setShowMiddle(!showMiddle);
        setShowAddBtn(!showAddBtn);
    }

    const deleteHandler = (task) => {
        const newData = tasks.filter((t) => t !== task);
        setTasks(newData);
    }

    return (
        <main>
            <div className="container">
                {showAddBtn &&
                    <div className="upperPart">
                        <button className="btn btn-info" onClick={handler}>Add Task</button>
                    </div>
                }

                {showMiddle && <Addtask handler={handler} tasks={{ tasks, setTasks }} />}

                <div className="lowerPart">
                    {
                        tasks.map((d, index) => {
                            return (
                                <div className="task" key={index}>
                                    <span>{d}</span>
                                    <ul>
                                        <li><button className="btn btn-info" onClick={() => deleteHandler(d)}>del</button></li>
                                        <li><button className="btn btn-info">edit</button></li>
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </main >
    );
}
