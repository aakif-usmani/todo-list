// import React, { useState } from "react";

import "./UncompleteTask.css";


const UncompleteTask = (props) => {
    const clickhandler =(id) => {
        console.log(props.items[0])
    }
    var id=0;
    // const [taskEntered, steTaskentered] = useState("");
    
    // console.log(props.items)
    return (
        <div className="uncompleteTask">
            {props.items.map(item => {
                id++;
                return (<div className="uncompleteItem" key={id}>
                    <span className="taskArea">
                        {item.task}
                    </span>
                    <span className="dateArea">
                        {item.date}
                    </span>
                    <span className="timeArea">
                    {item.time}
                    </span>
                    <button className="done-task-button" onClick={()=>clickhandler(id)}>
                        task done
                    </button>
                </div>)
            }
            )}

            
        </div>
    )
}

export default UncompleteTask;