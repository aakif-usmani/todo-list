import React from "react";
import './App.css';
// import TaskInput from "./Components/InputComponents/TaskInput";
// import DateInput from "./Components/InputComponents/DateInput";
// import TimeInput from "./Components/InputComponents/TimeInput";
import CompleteTask from "./Components/TaskShowComponents/CompleteTask";
import UncompleteTask from "./Components/TaskShowComponents/UncompeleteTask";
// import AddTaskbutton from "./Components/InputComponents/AddTaskButton";


const App = () => {

const tasklist = [
  {
    task: "something is wrong in main page",
    date: "02-09-2021",
    time: "05:35",
  },
  {
    task: "something is wrong in product key",
    date: "12-08-2021",
    time: "10:20",
  },
  {
    task: "check item numbers in delivered-list",
    date: "12-12-2021",
    time: "12:08",
  },
  {
    task: "chech expense items",
    date: "18-05-2021",
    time: "23:30",
  },
  {
    task: "curect the title of welcome bar",
    date: "12-8-2021",
    time: "11:45",
  },
];

  return (
    <div className="App">
      <div className="main-2">
        <p><b>INPUT TASK HERE</b></p>
        <div className="taskInput1 main-2">
        <input placeholder="ADD TASK" type="text" className="input-top" />
        <input type="date" className="input-top" />
        <input type="time" className="input-top" />
          {/* <TaskInput />
          <DateInput />
          <TimeInput />
          <AddTaskbutton/> */}
        </div>
        <p>
          <b>UNCOMPLETE TASK</b>
        </p>
        <div className=" main-2">
          <UncompleteTask items={tasklist}/>
        </div>
        <p>
          <b>COMPLETE TASK</b>
        </p>
        <div className=" main-2">
          <CompleteTask />
        </div>
      </div>
    </div>
  );
}

export default App;