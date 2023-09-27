import React from 'react'
import '../styles/addButton.css'

function AddButton({HandleAddDiv}) {
  return (
    <div onClick={HandleAddDiv} className='rounded-3 mb-5' id='addbtn'><h1>+</h1></div>
  )
}

export default AddButton
