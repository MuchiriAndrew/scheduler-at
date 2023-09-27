import React from 'react'
import ClassAdder from '../ClassAdder'
import AddButton from '../AddButton'
import "../../styles/Home.css"

function Home() {
  return (
    <>
        <div className='bg-primary py-5' id='wrapper1'>
            <ClassAdder />
            <AddButton />
        </div>
    </>
  )
}

export default Home
