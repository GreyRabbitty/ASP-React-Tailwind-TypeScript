import React from 'react'

//import icons
import { SlSocialTwitter, SlSocialInstagram } from 'react-icons/sl'
import { TiSocialTwitter } from 'react-icons/ti'
import { RiDiscordLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <div className='flex flex-col p-[100px] pb-[20px] bg-black  gap-[32px]'>
        <p className='text-[#39FF14] text-[50px] font-extrabold leading-[80px] uppercase'>FOLLOW US</p>
        <div className='flex flex-row gap-[32px] mx-auto'>
            <SlSocialTwitter size={'32px'} color='white' />
            <SlSocialInstagram size={'32px'} color='white' />
            <TiSocialTwitter size={'32px'} color='white' />
            <RiDiscordLine size={'32px'} color='white' />
        </div>
        <div className='flex flex-row items-center gap-[32px] text-[#D9D9D9] pt-[50px] pb-[20px] -px-[50px]'>
            <p className='text-[24px] font-light leading-[32px]'>Privacy policy</p>
            <p className='text-[24px] font-light leading-[32px]'>cookie policy</p>
            <p className='text-[24px] font-light leading-[32px]'>terms & conditions</p>
            <div className='flex flex-grow border-t-[1px] h-[2px] border-[#39FF14]'></div>
        </div>
    </div>
  )
}
