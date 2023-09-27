import './App.css'
import Classes from './components/pages/Classes'
import Tasks from './components/pages/Tasks'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/classes' element = {<Classes/>}/>

        <Route path='/tasks' element = {<Tasks/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
