import './App.css'
import React from 'react';
import Classes from './components/pages/Classes'
import ScheduleDisplay from './components/pages/ScheduleDisplay'
import Tasks from './components/pages/Tasks'
import Homepage from './components/pages/Hompage'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'

// const routes = [
//   { path: '/schedule', component: ScheduleDisplay, title: 'Schedule' },
//   { path: '/classes', component: Classes, title: 'Classes' },
//   { path: '/home', component: Homepage, title: 'Home' },
//   { path: '/tasks', component: Tasks, title: 'Tasks' },
// ];


function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element = {<Homepage/>} ></Route>
            <Route path='/classes' element = {<Classes/>}/>
            <Route path='/tasks' element = {<Tasks/>}/>
            <Route path='/schedule' element = {<ScheduleDisplay/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
