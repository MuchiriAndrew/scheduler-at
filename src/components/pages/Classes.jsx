import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClassAdder from '../ClassAdder'
import TaskAdder from '../TaskAdder'
import AddButton from '../AddButton'
import "../../styles/Home.css"
import '../../styles/addButton.css'

function Classes() {

  const [data, setData] = useState([])
  const [divs2, setDivs2] = useState([])
  const [divs, setDivs] = useState([<ClassAdder  divs2 = {divs2} setDivs2 = {setDivs2}  />])
  const [tasks2, setTasks2] = useState([]);
  const [tasks, setTasks] = useState([<TaskAdder tasks2 = {tasks2} setTasks2 = {setTasks2}/>]);


  const HandleAddClassDiv = () => {
    const newDiv = (
        <ClassAdder divs2 = {divs2} setDivs2 = {setDivs2} data = {data} setData = {setData}/>
    );
    setDivs(prevDivs => [...prevDivs, newDiv]);
  };

  const HandleAddTaskDiv = () => {
    const newDiv = (
        <TaskAdder tasks2 = {tasks2} setTasks2 = {setTasks2} data = {data} setData = {setData}/>
    );
    setTasks(prevTasks => [...prevTasks, newDiv]);
  };

  useEffect(() => {
   console.log('will be sent data', data);
  }, [data])

  const handleData = () => {
    setData(data.push(divs2))
    setData(data.push(tasks2))
    console.log(data);
  }


  return (
    <>
    <div id='container-wrapper'>
        <div className='' id='wrapper1'>
            <h1>Class Adder</h1>
            <div>{divs}</div>
            <AddButton HandleAddDiv = {HandleAddClassDiv}/>
            {/* <button className='btn btn-success' type='submit'>SUBMIT CLASSES</button> */}
        </div>


        <div className='bg-primary ' id='wrapper2'>
            <h1>Task Adder</h1>
            <div>{tasks}</div>
            <AddButton HandleAddDiv={HandleAddTaskDiv}/>
            {/* <button className='btn btn-success' type='submit'>SUBMIT TASKS</button> */}
        </div>

    </div>

    <button onClick={handleData} className='btn btn-success'>SUBMIT</button>
    </>
  )
}

export default Classes
