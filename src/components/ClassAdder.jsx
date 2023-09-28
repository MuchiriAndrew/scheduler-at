import React, {useState} from 'react'
import "../styles/classAdder.css";

function ClassAdder({divs2, setDivs2}) {

  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');
  const [classInput, setClassInput] = useState('');
  const [content, setContent] = useState('Add Class')

  // const handleChange = (event) => {
  //   setSelectedPriority(event.target.value);
  // };

  const handleAddTask = () => {
    if (fromInput && toInput && classInput) {
      setDivs2([...divs2, { from: fromInput, to: toInput, class: classInput }]);
      // setData([...data, { from: fromInput, to: toInput, class: classInput }])
      // setTaskInput('');
      // setSelectedPriority('');
      setContent('Added!!')
    }
  };

  return (
    <>
          <div className='rounded-3 mb-5 pe-4' id='container'>
            <div className='' id='content'>

            <div id='from'>
              <label htmlFor="from">From:</label>
              <input onChange={(e) => setFromInput(e.target.value)} className='rounded-3 px-3' id='input-from' type="time" />
            </div>

            <div id='to'>
              <label htmlFor="to">To:</label>
              <input onChange={(e) => setToInput(e.target.value)} className='rounded-3 px-3' id='input-to' type="time" />
            </div>

            <div id='class'>
              <label htmlFor="class">Class:</label>
              <input onChange={(e) => setClassInput(e.target.value)} className='rounded-3 px-3' id='input-class' type="text" />
            </div>

            <div id='button'>
            <button className='btn btn-primary' onClick={handleAddTask}>{content}</button>
            </div>

            </div>
          </div>
    </>
  )
}

export default ClassAdder
