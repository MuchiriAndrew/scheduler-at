import './App.css'
import TaskAdder from './components/TaskAdder'
import Home from './components/pages/Home'
import Tasks from './components/pages/Tasks'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/classes' element = {<Home/>}/>
        <Route path='/tasks' element = {<Tasks/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
