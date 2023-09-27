import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClassAdder from '../ClassAdder'
import AddButton from '../AddButton'
import "../../styles/Home.css"
import '../../styles/addButton.css'

function Home() {

  const [divs, setDivs] = useState([<ClassAdder />])
  const HandleAddDiv = () => {
    const newDiv = (
        <ClassAdder/>
    );
    setDivs(prevDivs => [...prevDivs, newDiv]);
  };

  return (
    <>
        <div className='py-5' id='wrapper1'>
            <h1>Class Adder</h1>
            <div>{divs}</div>
            <AddButton HandleAddDiv = {HandleAddDiv}/>
            <button className='btn btn-success' type='submit'><Link to={'/tasks'}>SUBMIT CLASSES</Link></button>
        </div>
    </>
  )
}

export default Home
