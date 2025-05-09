
import './App.css'
import EmployeeList from './components/EmployeeList'
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddEmployee from './components/AddEmployee'
import UpdateEmployee from './components/UpdateEmployee'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route index element={<EmployeeList/>}/>
        <Route path='/' element={<EmployeeList/>} />
        <Route path='/add-employee' element={<AddEmployee/>} />
        <Route path='/edit-employee/:id' element={<UpdateEmployee/>} />
       \
      </Routes>


      </BrowserRouter>

      </>
  )
}

export default App
