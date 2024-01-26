
import React, { useState } from 'react'
import headerimg from '../assets/images/workinggirl.webp'
import ellipse1 from '../assets/images/ellipse.png'
import ellipse2 from '../assets/images/ellipse2.png'
import ellipse3 from '../assets/images/ellipse3.png'

const Premium = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className='overflow-x-clip'>
            <div className='max-w-[1215px] mx-auto px-3 md:py-12 py-5'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 w-full px-3 md:pt-8 lg:pt-0 max-lg:text-center' data-aos-delay="2000">
                        <div className='flex max-lg:justify-center gap-5 relative after:absolute after:w-[232px] after:h-[1px] after:bg-[#E5E5E5] after:bottom-[-12%]  '>
                            <button onClick={() => handleTab('tab1')} className={`${activeTab === "tab1" ? "!text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px] after:left-0  after:!bg-[#B00000] z-10" : ""}  font-poppins text-[15px] font-semibold text-[#dbd9d9]`}>Hosting</button>
                            <button onClick={() => handleTab('tab2')} className={`${activeTab === "tab2" ? " !text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px]  after:left-0   after:!bg-[#B00000] z-10" : ""}  font-poppins text-[15px] font-semibold text-[#dbd9d9]`}>Domain</button>
                            <button onClick={() => handleTab('tab3')} className={`${activeTab === "tab3" ? " !text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px]  after:left-0   after:!bg-[#B00000] z-10" : ""}  font-poppins text-[15px] font-semibold text-[#dbd9d9]`}>SEO </button>
                            <button onClick={() => handleTab('tab4')} className={`${activeTab === "tab4" ? "!text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px]  after:left-0   after:!bg-[#B00000] z-10" : ""}  font-poppins text-[15px] font-semibold text-[#dbd9d9]`}>Email</button>
                        </div >
                        {/* <h1> {activeTab} </h1> */}
                        {activeTab === 'tab1' && <div className='fw-bold'>
                            <h2 className='text-4xl  leading:[76.5px] md:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] md:leading-[77.5px] text-center lg:text-start pt-4'>Premium Web Hosting for Your Website</h2>
                            <p className=' font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] md:pt-10 pt-5 text-center lg:text-start'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                            <div className=' flex gap-5 md:pt-14 pt-8 max-lg:justify-center'>
                                <button className='text-white text-nowrap sm:text-[14px] text-[13px]  font-normal font-poppins p-[12px] rounded-[8px] bg-[#B00000] shadow-[0px_0px_64px_0px_#B000004D]'>Create an Account</button>
                                <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden font-poppins sm:text-[14px] text-[13px]  font-normal text-black p-[12px] rounded-[8px] border-[1px] border-solid border-[#000000]  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#B00000] hover:border-[transparent] before:duration-500 before:ease-out hover:text-[white] hover:border-0 hover:shadow-[0px_0px_64px_0px_#B000004D] hover:before:h-56 hover:before:w-56">
                                    <span className="relative z-10 text-nowrap">Choose your plan</span>
                                </button>
                            </div>
                        </div>}
                        {activeTab === 'tab2' && <div className='fw-bold'>
                            <h2 className='text-4xl  leading:[76.5px] md:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] md:leading-[77.5px] text-center lg:text-start pt-4'>Ready to get started with
                                Lemon Wares?</h2>
                            <p className=' font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] md:pt-10 pt-5 text-center lg:text-start'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                            <div className=' flex gap-5 md:pt-14 pt-8 max-lg:justify-center'>
                                <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden font-poppins sm:text-[14px] text-[13px]  font-normal text-black p-[12px] rounded-[8px] border-[1px] border-solid border-[#000000]  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#B00000] hover:border-[transparent] before:duration-500 before:ease-out hover:text-[white] hover:border-0 hover:shadow-[0px_0px_64px_0px_#B000004D] hover:before:h-56 hover:before:w-56">
                                    <span className="relative z-10 text-nowrap">Create an Account</span>
                                </button>
                                <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden font-poppins sm:text-[14px] text-[13px]  font-normal text-black p-[12px] rounded-[8px] border-[1px] border-solid border-[#000000]  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#B00000] hover:border-[transparent] before:duration-500 before:ease-out hover:text-[white] hover:border-0 hover:shadow-[0px_0px_64px_0px_#B000004D] hover:before:h-56 hover:before:w-56">
                                    <span className="relative z-10 text-nowrap">Choose your plan</span>
                                </button>
                            </div>
                        </div>}
                        {activeTab === 'tab3' && <div className='fw-bold'>
                            <h2 className='text-4xl  leading:[76.5px] md:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] md:leading-[77.5px] text-center lg:text-start pt-4'>Real Stories from Real Customers</h2>
                            <p className=' font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] md:pt-10 pt-5 text-center lg:text-start'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                            <div className=' flex gap-5 md:pt-14 pt-8 max-lg:justify-center'>
                                <button className='text-white sm:text-[14px] text-[13px]  text-nowrap font-normal font-poppins p-[12px] rounded-[8px] bg-[#B00000] shadow-[0px_0px_64px_0px_#B000004D]'>Create an Account</button>
                                <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden font-poppins sm:text-[14px] text-[13px]  font-normal text-black p-[12px] rounded-[8px] border-[1px] border-solid border-[#000000]  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#B00000] hover:border-[transparent] before:duration-500 before:ease-out hover:text-[white] hover:border-0 hover:shadow-[0px_0px_64px_0px_#B000004D] hover:before:h-56 hover:before:w-56">
                                    <span className="relative z-10 text-nowrap">Choose your plan</span>
                                </button>
                            </div>
                        </div>}
                        {activeTab === 'tab4' && <div className='fw-bold'>
                            <h2 className='text-4xl  leading:[76.5px] md:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] md:leading-[77.5px] text-center lg:text-start pt-4'>We serve over 100
                                Nigerian Websites</h2>
                            <p className=' font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] md:pt-10 pt-5 text-center lg:text-start'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                            <div className=' flex gap-5 md:pt-14 pt-8 max-lg:justify-center'>
                                <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden font-poppins sm:text-[14px] text-[13px] font-normal text-black p-[12px] rounded-[8px] border-[1px] border-solid border-[#000000]  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#B00000] hover:border-[transparent] before:duration-500 before:ease-out hover:text-[white] hover:border-0 hover:shadow-[0px_0px_64px_0px_#B000004D] hover:before:h-56 hover:before:w-56">
                                    <span className="relative z-10 text-nowrap">Create an Account</span>
                                </button>
                                <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden font-poppins sm:text-[14px] text-[13px] font-normal text-black p-[12px] rounded-[8px] border-[1px] border-solid border-[#000000]  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#B00000] hover:border-[transparent] before:duration-500 before:ease-out hover:text-[white] hover:border-0 hover:shadow-[0px_0px_64px_0px_#B000004D] hover:before:h-56 hover:before:w-56">
                                    <span className="relative z-10 text-nowrap">Choose your plan</span>
                                </button>
                            </div>
                        </div>}
                    </div>
                    <div className='lg:w-1/2 w-full px-3 md:pt-16 pt-10 lg:pt-0 flex items-center justify-center relative' data-aos="zoom-in-up" data-aos-delay="1000">
                        <img src={headerimg} alt="headerimg" className='w-[90%] lg:w-[80%]' data-aos="zoom-in" />
                        <img src={ellipse1} alt="headerimg" className='absolute top-[61%] lg:left-[8%] left-[5%]' />
                        <img src={ellipse2} alt="headerimg" className='absolute top-[12%] lg:right-[8%] right-[5%]' />
                        <img src={ellipse3} alt="headerimg" className='absolute top-[77%] lg:right-[8%] right-[5%]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Premium