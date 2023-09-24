import React from 'react'

//import Icons
import {VscThreeBars} from 'react-icons/vsc'

export default function Header() {
  return (
    <div className='px-[100px] py-6 flex flex-row justify-between bg-black items-center backdrop-blur-[55]'>
        <img src='./assets/pic/METASWEEP 3.png' alt='This is header avatar'></img>
        <div className='flex flex-row gap-8'>
            <div className='bg-[#39FF14] rounded-[100px] px-4 py-[10px] cursor-pointer'>
                <p className='text-black text-[17px] not-italic font-bold leading-[17px] -tracking-[1px] uppercase'>Connect wallet</p>
            </div>
            <VscThreeBars size={'40px'} color='#39FF14' className='cursor-pointer'/>
        </div>
    </div>
  )
}
