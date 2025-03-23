import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (

        <div className="max-w-[375px] h-[612px] border-2 rounded border-[#F7F8F9] flex flex-col justify-end px-4 py-6 bg-[#F7F8F9]">
            <h2 className='text-[28px] font-bold'>Welcome to PopX</h2>
            <p className='text-lg opacity-60'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <Link to={'/create'} className='bg-[#6C25FF] mt-8 text-white flex justify-center items-center p-2 text-base rounded'>Create Account</Link>
            <Link to={'/login'} className='bg-[#6C25FF4B] mt-4 flex justify-center items-center p-2 text-base rounded'>Already Registered? Login</Link>
        </div>

    )
}
export default Home