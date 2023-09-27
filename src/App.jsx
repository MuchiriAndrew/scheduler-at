import './App.css'
import TaskAdder from './components/TaskAdder'
import Home from './components/pages/Home'
import ScheduleDisplay from './components/pages/ScheduleDisplay'
import Tasks from './components/pages/Tasks'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/classes' element = {<Home/>}/>
        <Route path='/tasks' element = {<Tasks/>}/>
        <Route path='/schedule' element = {<ScheduleDisplay/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
