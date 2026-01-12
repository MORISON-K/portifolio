import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import HomePage from './HomePage'

function App() {
 

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
