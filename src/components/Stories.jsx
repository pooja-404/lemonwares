import React from 'react'
import colon from '../assets/images/colon.png'
import cli from '../assets/images/cli.png'
import skoma from '../assets/images/colon2.png'
import jpnl from '../assets/images/jpnl.png'
import leevon from '../assets/images/leeve.png'

const Stories = () => {
    return (
        <>
            <div className='max-w-[1194px] mx-auto px-3 md:pt-28 pt-16'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 w-full px-3 flex flex-col lg:items-end'>
                        <div className='relative' data-aos="fade-right">
                            <img src={colon} alt="colon" className='absolute top-[-32%] lg:left-[-18%] left-[-3]' />
                            <h2 className=' font-inter md:text-[48px] text-3xl font-extrabold text-[#18191F] md:leading-[64px] max-lg:text-center max-lg:mx-auto lg:max-w-[445px]' >Real Stories from Real Customers</h2>
                            <p className='font-inter text-[18px] font-normal text-[#18191F] max-lg:text-center pt-2' data-aos="fade-right">Get inspired by these stories.</p>
                        </div>
                        <div className='rounded-[8px] shadow-[0px_10px_20px_0px_#29292A12] p-[7px_32px_96px_64px] lg:max-w-[350px] lg:mt-16 mt-8 relative' data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom">
                            <img src={skoma} alt="skoma" className='absolute top-[25%] left-[8%]' />
                            <img src={cli} alt="cli" />
                            <p className='font-inter text-[16px] font-normal text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                            <h2 className='font-inter text-[18px] font-bold text-[#18191F] pt-4'>Floyd Miles</h2>
                            <p className='font-inter text-[14px] font-medium text-[#969BAB]'>Vice President, CLI</p>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full px-3 lg:pt-8'>
                        <div className='rounded-[8px] shadow-[0px_10px_20px_0px_#29292A12] p-[39px_32px_14px_64px] lg:max-w-[445px] lg:mt-9 mt-8 relative' data-aos="fade-up"
                            data-aos-anchor-placement="center-center">
                            <img src={skoma} alt="skoma" className='absolute top-[34%] left-[8%]' />
                            <img src={jpnl} alt="cli" />
                            <p className='font-inter text-[16px] font-normal text-black pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                            <h2 className='font-inter text-[18px] font-bold text-[#18191F] pt-4'>CEO, JPNL</h2>
                            <p className='font-inter text-[14px] font-medium text-[#969BAB]'>CEO, JPNL</p>
                        </div>
                        <div className='rounded-[8px] shadow-[0px_10px_20px_0px_#29292A12] p-[41px_32px_32px_64px] lg:max-w-[350px] mt-8 relative' data-aos="fade-up"
                            data-aos-anchor-placement="top-center">
                            <img src={skoma} alt="skoma" className='absolute top-[34%] left-[8%]' />
                            <img src={leevon} alt="cli" />
                            <p className='font-inter text-[16px] font-normal text-black pt-3'>LemonWares saved our time in Hosting my company page.</p>
                            <h2 className='font-inter text-[18px] font-bold text-[#18191F] pt-4'>Kristin Watson</h2>
                            <p className='font-inter text-[14px] font-medium text-[#969BAB]'>Co-Founder, LeeveOn Branding</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stories
