import React from 'react'
import { Link } from 'react-router-dom'
import InputField from './InputField'

function Login() {
  return (
    <div className="max-w-[375px] h-[612px] border-2 rounded border-[rgb(247,248,249)] flex flex-col px-4 py-6 bg-[#F7F8F9]">
      <h2 className='text-[28px] font-bold'>Welcome to PopX</h2>
      <p className='text-lg opacity-60 mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <InputField label={'Email address'} />
      <InputField label={'Password'} />
      <Link to={'/account'} className='bg-[#CBCBCB] mt-1 text-white flex justify-center items-center p-2 text-base rounded'>Login</Link>
    </div>
  )
}

export default Login