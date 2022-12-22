import React from 'react'
import { useState } from 'react';
import './addtask.css'
import uuid from 'react-uuid';

export default function Addtask({ handler, tasks,setTasks }) {
    const [value, setValue] = useState('');
    const changeHandler = (e) => {
        setValue(e.target.value);
    }
    const addHandler = () => {
        if (value) {
            const newTask =  { id: uuid(), task: value, done: false };
            console.log(newTask)
            const newData = [...tasks, newTask];
            setTasks(newData);
            setValue('');
        }
    }
    return (
        <div className='middlePart'>
            <div className="header">
                <h4>Add Task</h4>
                <button className='btn btn-light' onClick={handler}>&#10060;</button>
            </div>
            <textarea name="textarea" value={value} onChange={changeHandler} className='form-control'></textarea>
            <button className='btn btn-success' onClick={addHandler}>Add Task</button>
        </div>
    );
}
