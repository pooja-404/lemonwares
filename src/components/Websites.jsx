import React from 'react'
import pic1 from '../assets/images/jp.png'
import pic2 from '../assets/images/korane.png'
import pic3 from '../assets/images/nadine.png'
import pic4 from '../assets/images/lee.png'
import pic5 from '../assets/images/jrang.png'
import pic6 from '../assets/images/clii.png'

const Websites = () => {
    return (
        <>
            <div className='max-w-[1194px] mx-auto px-3 py-12 md:py-20'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 px-3 w-full'>
                        <h2 className='font-inter font-extrabold md:text-[48px] text-3xl text-black lg:max-w-[445px] max-lg:text-center flex-none md:leading-[64px]' data-aos="fade-right">We serve over 100
                            Nigerian Websites</h2>
                        <p className='text-[18px] font-normal font-inter text-black lg:max-w-[445px] max-lg:text-center pt-3' data-aos="fade-right">Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                    </div>
                    <div className='lg:w-1/2 px-3  flex justify-end'>
                        <div className='flex flex-wrap flex-row -mx-3'>
                            <div className='w-1/3 px-3 flex items-center justify-center'>
                                <div className='max-w-[172px] h-[92px]'>
                                    <img src={pic1} alt="cpanel" data-aos="flip-up" />
                                </div>
                            </div>
                            <div className='w-1/3 px-3 flex items-center justify-center'>
                                <div className='max-w-[172px] h-[92px]'>
                                    <img src={pic2} alt="imufy" data-aos="flip-up" />
                                </div>
                            </div>
                            <div className='w-1/3 px-3 flex items-center justify-center'>
                                <div className='max-w-[172px] h-[92px]'>
                                    <img src={pic3} alt="litespeed" data-aos="flip-up" />
                                </div>
                            </div>
                            <div className='w-1/3 px-3 flex items-center justify-center'>
                                <div className='max-w-[172px] h-[92px]'>
                                    <img src={pic4} alt="softa" className='pt-4' data-aos="flip-down" />
                                </div>
                            </div>
                            <div className='w-1/3 px-3 flex items-center justify-center'>
                                <div className='max-w-[172px] h-[92px]'>
                                    <img src={pic5} alt="wordpress" className='pt-4' data-aos="flip-down" />
                                </div>
                            </div>
                            <div className='w-1/3 px-3 flex items-center justify-center'>
                                <div className='max-w-[172px] h-[92px]'>
                                    <img src={pic6} alt="cloud" className='pt-4' data-aos="flip-down" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Websites
