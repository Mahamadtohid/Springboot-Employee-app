import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeList = () => {
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
            <th className='uppercase px-6 py-3 tracking-wide'>ID</th>
            <th className='uppercase px-6 py-3 tracking-wide'>Name</th>
            <th className='uppercase px-6 py-3 tracking-wide'>Email</th>
            <th className='uppercase px-6 py-3 tracking-wide'>Action</th>
            
          </thead>
          <tbody>
            <tr className="hover:bg-white hover:text-black">
              <td className='text-left px-6 py-4 whitespace-nowrap'>1</td>
              <td className='text-left px-6 py-4 whitespace-nowrap'>Mahamadtohid</td>
              <td className='text-left px-6 py-4 whitespace-nowrap'>tohid@gmail.com</td>
              <td className='text-left px-6 py-4 whitespace-nowrap'><a href="">Edit  </a>
              <a href="">  Delete</a></td>
              
              
            </tr>

          </tbody>


        </table>
      </div>
      </div>
    </div>
  )
}

export default EmployeeList