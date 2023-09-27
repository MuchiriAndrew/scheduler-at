import React, {useState} from 'react'
import AddButton from '../AddButton'
import TaskAdder from '../TaskAdder'
import "../../styles/Home.css"
import '../../styles/addButton.css'

function Tasks() {
    const [tasks2, setTasks2] = useState([]);
    const [tasks, setTasks] = useState([<TaskAdder tasks2 = {tasks2} setTasks2 = {setTasks2}/>]);

    const HandleAddDiv = () => {
        const newDiv = (
            <TaskAdder tasks2 = {tasks2} setTasks2 = {setTasks2}/>
        );
        setTasks(prevTasks => [...prevTasks, newDiv]);
        console.log(tasks2);
      };

  return (
    <>
        <div className='py-5' id='wrapper1'>
            <h1>Task Adder</h1>
            <div>{tasks}</div>
            <AddButton HandleAddDiv={HandleAddDiv}/>
            <button className='btn btn-success' type='submit'>SUBMIT TASKS</button>
        </div>
    </>
  )
}

export default Tasks
