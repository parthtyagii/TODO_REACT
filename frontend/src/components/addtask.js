import React from 'react'
import { useState } from 'react';
import './addtask.css'

export default function Addtask({ handler, tasks }) {
    const [value, setValue] = useState('');
    const changeHandler = (e) => {
        setValue(e.target.value);
    }
    const addHandler = (e) => {
        const newData = [...tasks.tasks, value];
        tasks.setTasks(newData);
        setValue('');
    }
    return (
        <div className='middlePart'>
            <h4>Add Task</h4>
            <input type="text" value={value} onChange={changeHandler} className='form-control' />
            <button className='btn btn-success middleBtn' onClick={addHandler}>Add Task</button>
            <button className='btn btn-danger middleBtn' onClick={handler} >Cancel</button>
        </div>
    );
}
