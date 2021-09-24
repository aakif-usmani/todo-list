import React from "react";
import './App.css';
import TaskInput from "./Components/InputComponents/TaskInput";
import DateInput from "./Components/InputComponents/DateInput";
import TimeInput from "./Components/InputComponents/TimeInput";
import CompleteTask from "./Components/TaskShowComponents/CompleteTask";
import UncompleteTask from "./Components/TaskShowComponents/UncompeleteTask";


function App() {
  return (
    <div className="App">
      <div className="taskInput1 main-2">
        <p><b>INPUT TASK HERE</b></p>
        <div className="taskInput1 main-2">
          <TaskInput />
          <DateInput />
          <TimeInput />
        </div>
        <p>
          <b>UNCOMPLETE TASK</b>
        </p>
        <div className="taskInput1 main-2">
          <UncompleteTask />
        </div>
        <p>
          <b>COMPLETE TASK</b>
        </p>
        <div className="taskInput1 main-2">
          <CompleteTask />
        </div>
      </div>


      {/* <div className="doneCheck ">
            <button>done</button>
          </div> */}






    </div>
  );
}

export default App;