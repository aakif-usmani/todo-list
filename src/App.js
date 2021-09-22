import React from "react";
import './App.css';
import TaskInput from "./Components/InputComponents/TaskInput";
import DateInput from "./Components/InputComponents/DateInput";
import TimeInput from "./Components/InputComponents/TimeInput";


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      <form>
        <div className="taskInput1 main-2">


          <TaskInput/>
         <DateInput/>
          <TimeInput/>
        </div>
        <div className="bottom-div">
          <div className="uncompleteTask-colunm1 main-1">
            <p>
            uncomplete tasks
            </p>
          </div>
          <div className="completeTask-colunm2 main-1">
          <p>
            uncomplete tasks
            </p>
          </div>
          {/* <div className="doneCheck ">
            <button>done</button>
          </div> */}

        </div>
      </form>



    </div>
  );
}

export default App;