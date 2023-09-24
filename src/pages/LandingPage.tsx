import React from 'react'

//import icon
import { AiOutlineHeart } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'

//import Comp
import CardComp from '../component/CardComp'
import cardData from '../data/cardData'

//import slider
import Slider from "react-slick";

export default function LandingPage() {

    //slicker setting variable
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <div className='flex flex-col items-center py-[100px] px-[100px] bg-black'>
        <div className='mx-5 w-full'>
            <Slider {...settings}>
                <div className='w-full first:flex flex-row justify-between'>
                    <div className='w-7/12 flex flex-col gap-4 text-left'>
                        <div className='flex flex-row gap-2'>
                            <div className='rounded-full width-[8px] height-[8px] bg-[#EB5853]'></div>
                            <p className='text-white text-[24px] font-normal leading-8 uppercase'>Auctions Room</p>
                        </div>
                        <p className='text-[#39FF14] text-[50px] font-bold leading-[50px]'>
                            ApeSkullSociety #1608
                        </p>
                        <p className='text-[20px] text-white font-light leading-[32px] mb-3'>
                            Enter now for a chance to win Mutant Ape Yacht Club #10735. 
                            The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes 
                            that can only be created by exposing an existing Bored Ape to a vial of 
                            MUTANT SERUM or by minting a Mutant Ape in the public sale...See more
                        </p>
                        <div className='flex flex-row gap-4'>
                            <div className='flex items-center bg-[#39FF14] rounded-[100px] cursor-pointer py-[10px] px-[16px]'>
                                <p className='text-black text-[17px] not-italic font-bold leading-[17px] -tracking-[1px] uppercase'>ENTER ROOM</p>
                            </div>
                            <div className='rounded-[100px] bg-transparent border-[1px] border-[#39FF14] py-[10px] px-[16px]'>
                                <AiOutlineHeart size={'20px'} color='#39FF14'/>
                            </div>
                            <div className='rounded-[100px] bg-transparent border-[1px] border-[#39FF14] py-[10px] px-[16px]'>
                                <BsThreeDotsVertical size={'20px'} color='#39FF14'/>
                            </div>
                        </div>
                    </div>
                    <div className='w-5/12'>

                    </div>
                </div>
                <div className='w-full first:flex flex-row justify-between'>
                    <div className='w-7/12 flex flex-col gap-4 text-left'>
                        <div className='flex flex-row gap-2'>
                            <div className='rounded-full width-[8px] height-[8px] bg-[#EB5853]'></div>
                            <p className='text-white text-[24px] font-normal leading-8 uppercase'>Auctions Room</p>
                        </div>
                        <p className='text-[#39FF14] text-[50px] font-bold leading-[50px]'>
                            ApeSkullSociety #1608
                        </p>
                        <p className='text-[20px] text-white font-light leading-[32px] mb-3'>
                            Enter now for a chance to win Mutant Ape Yacht Club #10735. 
                            The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes 
                            that can only be created by exposing an existing Bored Ape to a vial of 
                            MUTANT SERUM or by minting a Mutant Ape in the public sale...See more
                        </p>
                        <div className='flex flex-row gap-4'>
                            <div className='flex items-center bg-[#39FF14] rounded-[100px] cursor-pointer py-[10px] px-[16px]'>
                                <p className='text-black text-[17px] not-italic font-bold leading-[17px] -tracking-[1px] uppercase'>ENTER ROOM</p>
                            </div>
                            <div className='rounded-[100px] bg-transparent border-[1px] border-[#39FF14] py-[10px] px-[16px]'>
                                <AiOutlineHeart size={'20px'} color='#39FF14'/>
                            </div>
                            <div className='rounded-[100px] bg-transparent border-[1px] border-[#39FF14] py-[10px] px-[16px]'>
                                <BsThreeDotsVertical size={'20px'} color='#39FF14'/>
                            </div>
                        </div>
                    </div>
                    <div className='w-5/12'>

                    </div>
                </div>
            </Slider>
        </div>
        
        <div className='p-[100px] flex flex-col gap-[32px] w-full'>
            <p className='text-center font-["Plus", "Jakarta", "Sans"] text-[50px] text-[#39FF14] font-bold leading-[80px] uppercase '>
                Discover more
            </p>
            {/* <div className='flex flex-row gap-3 mx-auto'>
                <div className='flex items-center bg-[#39FF14] rounded-[100px] cursor-pointer py-[10px] px-[16px] cursor-pointer'>
                    <p className='text-black text-[17px] not-italic font-bold leading-[17px] -tracking-[1px] uppercase'>ALL CATEGORIES</p>
                </div>
                <div className='rounded-[100px] bg-transparent border-[1px] border-[#39FF14] py-[10px] px-[16px] cursor-pointer'>
                    <p className='text-[#39FF14] text-[17px] not-italic font-bold leading-[17px] -tracking-[1px] uppercase'>ART</p>
                </div>
                <div className='rounded-[100px] bg-transparent border-[1px] border-[#39FF14] py-[10px] px-[16px] cursor-pointer'>
                    <p className='text-[#39FF14] text-[17px] not-italic font-bold leading-[17px] -tracking-[1px] uppercase'>CELEBRITIES</p>
                </div>
                <div className='rounded-[100px] bg-transparent border-[1px] border-[#39FF14] py-[10px] px-[16px] cursor-pointer'>
                    <p className='text-[#39FF14] text-[17px] not-italic font-bold leading-[17px] -tracking-[1px] uppercase'>GAMING</p>
                </div>
                <div className='rounded-[100px] bg-transparent border-[1px] border-[#39FF14] py-[10px] px-[16px] cursor-pointer'>
                    <p className='text-[#39FF14] text-[17px] not-italic font-bold leading-[17px] -tracking-[1px] uppercase'>SPORT</p>
                </div>
                <div className='rounded-[100px] bg-transparent border-[1px] border-[#39FF14] py-[10px] px-[16px] cursor-pointer'>
                    <p className='text-[#39FF14] text-[17px] not-italic font-bold leading-[17px] -tracking-[1px] uppercase'>MUSIC</p>
                </div>
                <div className='rounded-[100px] bg-transparent border-[1px] border-[#39FF14] py-[10px] px-[16px] cursor-pointer'>
                    <p className='text-[#39FF14] text-[17px] not-italic font-bold leading-[17px] -tracking-[1px] uppercase'>CRYPTO</p>
                </div>
            </div> */}
            <div className='grid grid-cols-4 gap-[32px]'>
                {/* <div className='flex flex-row gap-[32px]'> */}
                    { cardData.map((data, index) => 
                        <CardComp 
                            imgSrc={data.imgSrc} 
                            cardName={data.cardName} 
                            highestBid={data.highestBid}
                            polygon={data.polygon}
                            key={index}
                        />
                    )}
                {/* </div> */}
            </div>
        </div>
    </div>
    
  )
}
