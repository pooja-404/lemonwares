import React from "react";
import footlogo from "../assets/images/footlogo.webp";
const Footersec = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="bg-[#B00000] md:pb-20 pb-8 md:pt-16 pt-8 overflow-hidden">
            <div className="max-w-[1220px] px-3 mx-auto">
                <div className="flex flex-row flex-wrap -mx-3 md:pb-[96px]">
                    <div className="lg:w-4/12 px-3 w-full" data-aos="fade-down-right">
                        <img src={footlogo} alt="footlogo" className="cursor-pointer" />
                        <p className="text-[#E6E6E6] text-base font-inter leading-[200%] lg:max-w-[296px] pt-6 font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                            aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                            urna, porttitor rhoncus dolor purus non enim praesent elem
                        </p>
                    </div>
                    <div className="lg:w-8/12 px-3 pt-7 md:pt-10 w-full" data-aos="fade-up-left">
                        <div className="flex flex-row flex-wrap -mx-3">
                            <div className="md:w-3/12 w-1/2 px-3 flex lg:justify-end">
                                <ul>
                                    <li className="font-inter font-bold leading-[150%] text-base text-white pb-4 md:pb-6">
                                        Service
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Domain
                                        </a>
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Shared Hosting
                                        </a>
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Cloud Hosting
                                        </a>
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Private Hosting
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-3/12 w-1/2 px-3 flex lg:justify-end">
                                <ul>
                                    <li className="font-inter font-bold leading-[150%] text-base text-white pb-4 md:pb-6">
                                        Hosting
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Cheap Hosting
                                        </a>
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Hosting Wordpress
                                        </a>
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Email Hosting
                                        </a>
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Hosting Unlimited
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-3/12 w-1/2  px-3 flex lg:justify-end">
                                <ul>
                                    <li className="font-inter font-bold leading-[150%] text-base text-white pb-4 md:pb-6">
                                        Company
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Career
                                        </a>
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-3/12 w-1/2 px-3 flex lg:justify-end">
                                <ul>
                                    <li className="font-inter font-bold leading-[150%] text-base text-white pb-4 md:pb-6">
                                        Help
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="pb-4 md:pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Help support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p className=" font-inter text-[12px] sm:text-base md:leading-[200%] text-[#E6E6E6] flex items-center gap-0.5 font-normal" >
                    Built by Jeremiah with{" "}
                    <a href="" className='cursor-pointer' >
                       &#129293;
                    </a>{" "}
                    in Lagos. Copyright {year}
                </p>
            </div>
        </div>
    );
};

export default Footersec;
