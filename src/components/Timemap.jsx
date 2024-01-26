import React from 'react'
import clock from '../assets/images/icon1.svg'
import hosting from '../assets/images/icon2.svg'
import ssl from '../assets/images/icon3.svg'
import support from '../assets/images/icon4.webp'

const card1 = [
    {
        svg: clock,
        heading: '99.9% Uptime',
        paragraph: 'We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.',
        animation: "fade-right",

    },
    {
        svg: hosting,
        heading: 'Blazing Fast Web Hosting',
        paragraph: 'We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.',
        animation: "fade-right",
    },
    {
        svg: ssl,
        heading: 'Free SSL Certificates',
        paragraph: 'We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.',
        animation: "fade-left",
    },
    {
        svg: support,
        heading: '24x7 Friendly Support',
        paragraph: 'We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.',
        animation: "fade-left",
    }
]
const Timemap = () => {
    const list = card1.map((card1, m) => (
        <div className='lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-3' key={m} >
            <div className='flex justify-center items-center flex-col mt-6' data-aos={`${card1.animation}`}
                data-aos-duration="500" data-aos-offset="500"
                data-aos-easing="ease-in-sine">
                <div className='w-[100px] h-[100px] bg-[#f3d9d9] rounded-[50%]'>
                    <img src={card1.svg} alt="svg" className='mx-auto' />
                </div>
                <h2 className='text-black font-poppins text-[20px] font-bold text-center pt-4'>{card1.heading}</h2>
                <p className=' font-poppins text-black font-light text-[12px] max-w-[252px] mx-auto text-center pt-2'>{card1.paragraph}</p>
            </div>
        </div>
    ));
    return (
        <div className='overflow-x-clip'>
            <div className='max-w-[1284px] mx-auto px-3 py-6 md:py-14'>
                <div className='flex flex-wrap flex-row -mx-3 justify-center'>
                    {list}
                </div>
            </div>
        </div>
    )
}

export default Timemap
