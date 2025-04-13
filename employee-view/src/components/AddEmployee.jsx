import React from 'react'
import { useNavigate } from 'react-router-dom'

function AddEmployee() {
    const navigate = useNavigate();
  return (
    <div className='max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8'>
        <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
            <p>Add Employee</p>
        </div>

        <div className='mx-10 my-2'>
        {/* <h1>AddEmployee</h1> */}
        <input className='bg-white w-full py-2 my-4 text-slate-800' name="name" type="text" placeholder='Name'></input>
        <input className='bg-white w-full py-2 my-4 text-slate-800' name="email" type="email" placeholder='Email'></input>
        <input  className='bg-white w-full py-2 my-4 text-slate-800' name="phone" type="number" placeholder='Phone'></input>
        </div>

        <div className='flex px-20 space-x-4 my-4'>
        <button className='bg-green-400 hover:bg-green-700 py-2 px-6 rounded'>Save</button>
        <button className='bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded'>Clear</button>
        <button
        onClick={() => navigate('/')}

        className='bg-red-400 hover:bg-red-700 py-2 px-6 rounded'>Cancel</button>
        </div>
        
    </div>
  )
}

export default AddEmployee