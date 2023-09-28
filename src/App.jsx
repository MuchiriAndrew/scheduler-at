import './App.css'
import React from 'react';
import Classes from './components/pages/Classes'
import ScheduleDisplay from './components/pages/ScheduleDisplay'
import Homepage from './components/pages/Hompage'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import UserCredentials from './components/pages/UserCredentials'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/classes' element = {<Classes/>}/>
        <Route path='/credentials' element = {<UserCredentials/>}/>
        <Route path='/schedule' element = {<ScheduleDisplay/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
