import React from 'react'

interface CardCompProp {
    imgSrc: string
    cardName: string,
    highestBid: number,
    polygon: number,
}

const CardComp:React.FC<CardCompProp> = ({ 
    imgSrc,
    cardName,
    highestBid,
    polygon
 }) => {
    return (
        <div className='flex flex-col rounded-[16px] border-[1px] border-[#292C31] bg-[#141515] p-[8px] mx-auto'>
            <div className='relative'>
                <img src={imgSrc} alt='card img'/>
                <div className='absolute z-10 -bottom-[8%] left-[50%] -translate-x-[50%] -translate-y-[50%] custom-card-timePanel py-[6px] px-[10px] rounded-[100px]'>
                    <p className='text-white text-[15px] font-bold leading-5 min-w-[100px]'>12h 43m 42s</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 p-2'>
                <div className='flex flex-col gap-4'>
                    <p className='text-white text-[20px] font-bold leading-[26px] text-left'>
                        { cardName }
                    </p>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-[3px] items-center'>
                            <p className='text-white text-[12px] font-light leading-[19px] capitalize'>🔥 Highest bid</p>
                            <p className='text-[#39FF14] text-[12px] font-bold leading-[15px] capitalize'>{ highestBid }</p>
                        </div>
                        <div className='flex flex-row gap-1 bg-[#39FF14] rounded-[21px] p-1 pr-2'>
                            <img src='./assets/pic/Polygon.png' alt='This is Polygon' />
                            <p className='text-black text-[14px] font-bold leading-[19px]'>{ polygon }</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-[100px] bg-transparent border-[1px] border-[#39FF14] py-[10px] px-[16px] cursor-pointer w-full'>
                    <p className='text-[#39FF14] text-[17px] not-italic font-bold leading-[17px] -tracking-[1px] uppercase'>VIEW</p>
                </div>
            </div>
        </div>
    )
}

export default CardComp;