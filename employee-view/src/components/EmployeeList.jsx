import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import EmployeeService from '../service/EmployeeService'




const EmployeeList = () => {

  const [loading , setLoading] = useState(true);

  const [employees , setEmployees] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

      setLoading(true);

      try{
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      }catch(error){
        console.error("Error fetching employee data", error);
      }
      setLoading(false);
    };

    fetchData();
  } , []);

  const deleteEmployee = (e , id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id)
    .then( () => {
      if(employees){
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        })

      }
    })
  }

  const editEmployee = (e , id) => {
    e.preventDefault();
 navigate(`/edit-employee/${id}`);
  }
      
  const navigate = useNavigate();
  return (
    <div>
              <div className='container mx-auto my-8'>
      <div>
        <button
        onClick={() => navigate('/add-employee')}
        className='bg-slate-500 text-white my-12 rounded-md m-4 hover:bg-blue-600 font-semibold px-6 py-2'>Add Employee</button>
    
      </div>

      <div>
        <table className='shadow'>
          <thead className='bg-slate-600'>
            <tr>
            <th className='uppercase px-6 py-3 tracking-wide'>ID</th>
            <th className='uppercase px-6 py-3 tracking-wide'>Name</th>
            <th className='uppercase px-6 py-3 tracking-wide'>Email</th>
            <th className='uppercase px-6 py-3 tracking-wide'>Action</th>
            </tr>
            
          </thead>
          {!loading && (
          <tbody>
            
            {employees.map((employee)=>(
            <tr className="hover:bg-white hover:text-black">
              <td className='text-left px-6 py-4 whitespace-nowrap'>{employee.id}</td>
              <td className='text-left px-6 py-4 whitespace-nowrap'>{employee.name}</td>
              <td className='text-left px-6 py-4 whitespace-nowrap'>{employee.email}</td>
              <td className='text-left px-6 py-4 whitespace-nowrap'><button 
              onClick={(e) => editEmployee(e, employee.id)} 
                className=" hover:underline hover:text-blue-500"
                >
                  Edit
                </button>
              <button 
              onClick={(e) => deleteEmployee(e, employee.id)} 
                className=" hover:underline hover:text-red-500 hover:cursor-pointer"
                >
                  Delete
                </button></td>
              
              
            </tr>
            ))}
          </tbody>
          )}


        </table>
      </div>
      </div>
    </div>
  )
}

export default EmployeeList