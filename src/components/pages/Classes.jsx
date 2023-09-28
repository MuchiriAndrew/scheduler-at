import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClassAdder from '../ClassAdder'
import AddButton from '../AddButton'
import "../../styles/Home.css"
import '../../styles/addButton.css'

function Classes() {

  const [divs2, setDivs2] = useState([])
  const [divs, setDivs] = useState([<ClassAdder  divs2 = {divs2} setDivs2 = {setDivs2}/>])

  const HandleAddDiv = () => {
    const newDiv = (
        <ClassAdder divs2 = {divs2} setDivs2 = {setDivs2}/>
    );
    setDivs(prevDivs => [...prevDivs, newDiv]);
    console.log(divs2);
  };

  return (
    <>
      <a href='/' className='floating-back-btn m-3 mt-2'>
          <i className='bi bi-arrow-left'></i>
      </a>
        <div className='py-5' id='wrapper1'>
            <h1>Class Adder</h1>
            <div>{divs}</div>
            <AddButton HandleAddDiv = {HandleAddDiv}/>
            <button className='btn btn-success' type='submit'><Link to={'/tasks'}>SUBMIT CLASSES</Link></button>
        </div>
    </>
  )
}

export default Classes
