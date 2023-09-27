import React from 'react'
import "../styles/ClassAdder.css"

function ClassAdder() {
  return (
    <>
          <div className='rounded-3 mb-5 pe-4' id='container'>
            <div className='' id='content'>

            <div id='from'>
              <label htmlFor="from">From:</label>
              <input className='rounded-3 px-3' id='input-from' type="time" />
            </div>

            <div id='to'>
              <label htmlFor="to">To:</label>
              <input className='rounded-3 px-3' id='input-to' type="time" />
            </div>

            <div id='class'>
              <label htmlFor="class">Class:</label>
              <input className='rounded-3 px-3' id='input-class' type="text" />
            </div>

            </div>
          </div>
    </>
  )
}

export default ClassAdder
