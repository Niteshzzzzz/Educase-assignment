import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from './InputField'

function CreateAccount() {

    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <div className="w-[375px] min-h-[612px] border-2 rounded border-[#F7F8F9] flex flex-col bg-[#F7F8F9]">
            <form action="" className='h-[612px] px-4 py-6 flex flex-col justify-between'>
                <div className="">
                    <h2 className='text-[28px] font-bold mb-6'>Create your PopX account</h2>
                    <div className="">
                        <InputField label={'Full Name'} />
                        <InputField label={'Phone number'} />
                        <InputField label={'Email address'} />
                        <InputField label={'Password'} />
                        <InputField label={'Company name'} />
                        <div className="">
                            <h3 className='text-sm mb-1 mt-[-10px]'>Are you an Agency? <sup className='text-[#DD4A3D]'>*</sup></h3>
                            <label className='mr-4 text-sm'>
                                <input
                                    type="radio"
                                    name="choice" // Same name ensures only one can be selected
                                    value="option1"
                                    checked={selectedOption === "option1"}
                                    onChange={handleChange}
                                    className='scale-[1.4] mr-2 ml-1 accent-[#642AF5]'
                                />
                                Yes
                            </label>

                            <label className='text-sm'>
                                <input
                                    type="radio"
                                    name="choice"
                                    value="option2"
                                    checked={selectedOption === "option2"}
                                    onChange={handleChange}
                                    className='scale-[1.4] mr-2 accent-[#642AF5]'
                                />
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Link to={'/account'} className='bg-[#6C25FF] mt-8 text-white flex justify-center items-center p-2 text-base rounded'>Create Account</Link>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount