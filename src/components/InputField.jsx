import React from 'react'

function InputField({label}) {
    return (
        <div className="relative mb-6">
            <input type="text" id="name" name='name' placeholder='Marry Doe' className='border-1 border-[#CBCBCB] rounded text-black-700 px-4 py-2 w-full focus:outline-[#6C25FF]'></input>
            <label htmlFor="name" className='absolute top-[-0.8rem] left-[1.2rem] bg-[#F7F8F9] text-[#6C25FF] px-[4px] text-sm'>{label} <sup className='text-[#DD4A3D]'>*</sup></label>
        </div>
    )
}

export default InputField