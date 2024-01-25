import React from "react";
import footlogo from "../assets/images/footlogo.webp";
const Footersec = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="bg-[#B00000] md:pb-20 pb-8 pt-16">
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
                    <div className="lg:w-8/12 px-3 pt-10 w-full" data-aos="fade-up-left">
                        <div className="flex flex-row flex-wrap -mx-3">
                            <div className="md:w-3/12 w-1/2 px-3 flex lg:justify-end">
                                <ul>
                                    <li className="font-inter font-bold leading-[150%] text-base text-white pb-6">
                                        Service
                                    </li>
                                    <li className="pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Domain
                                        </a>
                                    </li>
                                    <li className="pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Shared Hosting
                                        </a>
                                    </li>
                                    <li className="pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Cloud Hosting
                                        </a>
                                    </li>
                                    <li className="pb-7">
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
                                    <li className="font-inter font-bold leading-[150%] text-base text-white pb-6">
                                        Hosting
                                    </li>
                                    <li className="pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Cheap Hosting
                                        </a>
                                    </li>
                                    <li className="pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Hosting Wordpress
                                        </a>
                                    </li>
                                    <li className="pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Email Hosting
                                        </a>
                                    </li>
                                    <li className="pb-7">
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
                                    <li className="font-inter font-bold leading-[150%] text-base text-white pb-6">
                                        Company
                                    </li>
                                    <li className="pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            Career
                                        </a>
                                    </li>
                                    <li className="pb-7">
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
                                    <li className="font-inter font-bold leading-[150%] text-base text-white pb-6">
                                        Help
                                    </li>
                                    <li className="pb-7">
                                        <a
                                            href=""
                                            className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="pb-7">
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
                <p className="text-white font-inter text-[12px] sm:text-base md:leading-[200%] flex items-center gap-0.5 font-normal" >
                    Built by Jeremiah with{" "}
                    <a href="" className='cursor-pointer' >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999Z"
                                fill="white"
                            />
                        </svg>
                    </a>{" "}
                    in Lagos. Copyright {year}
                </p>
            </div>
        </div>
    );
};

export default Footersec;
