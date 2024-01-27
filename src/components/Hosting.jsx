import React from 'react'
import cpanel from '../assets/images/panelimg.webp'
import imufy from '../assets/images/securedimg.webp'
import lite from '../assets/images/speedimg.webp'
import softa from '../assets/images/soft.webp'
import wordpress from '../assets/images/wordpressimg.webp'
import cloud from '../assets/images/cloudflareimg.webp'

const Hosting = () => {
    return (
        <div className='overflow-x-clip'>
            <div className='max-w-[1284px] mx-auto px-3 md:pt-8 pt-4 md:py-12'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 w-full px-3'>
                        <h2 className='text-grey-900 font-inter md:text-[48px] font-extrabold max-lg:text-center text-3xl leading-[64px]' data-aos="zoom-in-down">True Cloud Web  Hosting</h2>
                        <p className=' font-inter text-grey-900 text-[15px] sm:text-[18px] font-normal lg:max-w-[573px] pt-7 max-lg:text-center leading-[32px]' data-aos="zoom-in-down">
                            True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
                    </div>
                    <div className='lg:w-1/2 w-full px-3 pt-7 md:mt-12 mt-8 lg:mt-0'>
                        <div className='flex flex-wrap flex-row -mx-3'>
                            <div className='w-1/3 px-3 flex items-center justify-center text-center'>
                                <img src={cpanel} alt="cpanel" data-aos="flip-up" />
                            </div>
                            <div className='w-1/3 px-3 flex items-center justify-center text-center'>
                                <img src={imufy} alt="imufy" className=' lg:h-[56px] ' data-aos="flip-up" />
                            </div>
                            <div className='w-1/3 px-3 flex items-center justify-center text-center'>
                                <img src={lite} alt="litespeed" data-aos="flip-up" />
                            </div>
                            <div className='w-1/3 px-3 flex items-center justify-center text-center'>
                                <img src={softa} alt="softa" className='pt-4' data-aos="flip-down" />
                            </div>
                            <div className='w-1/3 px-3 flex items-center justify-center text-center'>
                                <img src={wordpress} alt="wordpress" className='pt-4' data-aos="flip-down" />
                            </div>
                            <div className='w-1/3 px-3 flex items-center justify-center text-center'>
                                <img src={cloud} alt="cloud" className='pt-4' data-aos="flip-down" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hosting
