import React from 'react'
import Addtask from './addtask'
import './main.css'
import { useState } from 'react';

export default function Main() {
    // const [show, setShow] = useState(false);
    // console.log(show);
    return (
        <main>
            <div className="container">
                <div className="upperPart">
                    <button className="btn btn-info" >Add Task</button>
                </div>
                
                

                <div className="lowerPart">
                    <div className="task">
                        <span>Hello, world</span>
                        <ul>
                            <li><button className="btn btn-info">del</button></li>
                            <li><button className="btn btn-info">edit</button></li>
                        </ul>
                    </div>
                    <div className="task">
                        <span>Hello, world</span>
                        <ul>
                            <li><button className="btn btn-info">del</button></li>
                            <li><button className="btn btn-info">edit</button></li>
                        </ul>
                    </div>
                    <div className="task">
                        <span>Hello, world</span>
                        <ul>
                            <li><button className="btn btn-info">del</button></li>
                            <li><button className="btn btn-info">edit</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
