import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import EmployeeService from '../service/EmployeeService'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


function UpdateEmployee() {

  const {id} = useParams();
  const [employee, setEmployee] = useState({
    id : id,
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value});

  }

  useEffect(() => {
  
      const fetchData = async () => {
  
  
        try{
          const response = await EmployeeService.getEmployeeById(id);
          setEmployee(response.data);
        }catch(error){
          console.error("Error fetching employee data", error);
        }
      };
  
      fetchData();
    } , []);


    const updateEmployee = (e) => {
      e.preventDefault();
      EmployeeService.updateEmployee(employee ,id)
      .then((response)=>{
        console.log("Data saved Successfully",response);
        navigate('/');
    })
    .catch((error)=>{
        console.log(error);
    })

    }

  const navigate = useNavigate();
  return (
    <div className='max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8'>
        <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
            <p>Update Employee</p>
        </div>

        <div className='mx-10 my-2'>
        {/* <h1>AddEmployee</h1> */}
        <input className='bg-white w-full py-2 my-4 text-slate-800' value ={employee.name} onChange={(e) => handleChange(e)} name="name" type="text" placeholder='Name'></input>
        <input className='bg-white w-full py-2 my-4 text-slate-800' value ={employee.email} onChange={(e) => handleChange(e)}name="email" type="email" placeholder='Email'></input>
        <input  className='bg-white w-full py-2 my-4 text-slate-800' value ={employee.phone} onChange={(e) => handleChange(e)} name="phone" type="number" placeholder='Phone'></input>
        </div>

        <div className='flex px-20 space-x-4 my-4'>
        <button
        
        onClick = {updateEmployee}
        className='bg-green-400 hover:bg-green-700 py-2 px-6 rounded'>Save</button>
      
        <button
        onClick={() => navigate('/')}

        className='bg-red-400 hover:bg-red-700 py-2 px-6 rounded'>Cancel</button>
        </div>
        
    </div>
  )
}

export default UpdateEmployee