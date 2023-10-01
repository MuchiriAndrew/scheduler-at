import React, {useState, useEffect} from 'react'
import AddButton from '../AddButton'
import TaskAdder from '../TaskAdder'
import "../../styles/Home.css"
import '../../styles/addButton.css';

function Tasks() {
    const [tasks2, setTasks2] = useState([]);
    const [tasks, setTasks] = useState([<TaskAdder tasks2 = {tasks2} setTasks2 = {setTasks2}/>]);

    const HandleAddDiv = () => {
        const newDiv = (
            <TaskAdder tasks2 = {tasks2} setTasks2 = {setTasks2}/>
        );
        setTasks(prevTasks => [...prevTasks, newDiv]);
      };

      useEffect(() => {console.log(tasks2)}, [tasks2])

  return (
    <>
    <a href='/' className='floating-back-btn m-3 mt-2'>
          <i className='bi bi-arrow-left'></i>
      </a>
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
