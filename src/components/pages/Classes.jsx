import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClassAdder from '../ClassAdder'
import TaskAdder from '../TaskAdder'
import AddButton from '../AddButton'
import "../../styles/Home.css"
import '../../styles/addButton.css'

function Classes() {

  const [data, setData] = useState({})
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
    setData((prev) => ({...prev, schedule: divs2}))
    setData((prev) => ({...prev, tasks: tasks2}))
    console.log(data);

    try {
      const phone = sessionStorage.getItem("target_phone");

      console.log({...data, phone});

      console.log(data);

      fetch(`http://localhost:3000/api/abc`, {
        method: "POST",
        body: JSON.stringify({...data, phone}),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })

    } catch(err) {
      alert("Failed to retrieve phone number");
    }
  }


  return (
    <>



        <div className='py-5' id='wrapper1'>
      <div id='container-wrapper'>

        <div id='grish'>
        <div className='' id='wrapper1'>
              <h1>Class Adder</h1>
              <div>{divs}</div>
              <AddButton HandleAddDiv = {HandleAddClassDiv}/>
              {/* <button className='btn btn-success' type='submit'>SUBMIT CLASSES</button> */}
        </div>


          <div id='wrapper2'>
              <h1>Task Adder</h1>
              <div>{tasks}</div>
              <AddButton HandleAddDiv={HandleAddTaskDiv}/>
              {/* <button className='btn btn-success' type='submit'>SUBMIT TASKS</button> */}
          </div>

        </div>


        <button onClick={handleData} id='submit' className='m-0 rounded-pill btn btn-success'>SUBMIT</button>

      </div>
      </div>


    </>
  );
}

export default Classes
