import React from 'react'

function AccountSetting() {
  return (
    <div className="max-w-[375px] h-[612px] border-2 rounded border-[rgb(247,248,249)] flex flex-col px-4 py-6 bg-[#F7F8F9]">
        <h2 className='text-xl bg-white w-[375px] px-3 py-5'>Account Settings</h2>
        <div className="flex items-center">
            <div className="relative py-4 px-4 mr-4">
                <img src="user.png" alt="" className='h-[76px] w-[76px]' />
                <img src="cicon.svg" alt="" className='absolute bottom-4 right-3' />
            </div>
            <div className="">
                <h2>Marry Doe</h2>
                <p>Marry@Gmail.Com</p>
            </div>
        </div>
        <p className='text-lg opacity-60 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, id eius earum porro, sint necessitatibus, fugit corrupti ipsum nihil repudiandae ipsam repellat</p>
    </div>
  )
}

export default AccountSetting