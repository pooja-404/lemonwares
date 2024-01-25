import React, { useState } from "react";

const myArray = [
    {
        heading: "Starter",
        heading2: "$2.80",
        heading3: "₹200.00",
        heading4: "Starter",
    },
    {
        heading: "Standard",
        heading2: "$5.20",
        heading3: "₹450.00",
        heading4: "Standard",
    },
    {
        heading: "Suprem",
        heading2: "$7.00",
        heading3: "₹780.00",
        heading4: "Suprem",
    }
]


const Lamon = () => {
    const [toggle, settoggle] = useState(false);
    const [Premium, setPremium] = useState("tabone");
    function btn() {
        settoggle(!toggle);
    }
    function latest(tab) {
        setPremium(tab);
    }

    const data = myArray.map((myArray, i) => (
        <div className="lg:w-1/3 sm:w-1/2 w-full px-3  justify-center flex mb-5 " >
            <div
                className="card max-w-[299px] w-full rounded-[15px] max-lg:mt-3 border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_#00000040_inset] bg-white md:pt-[34px] sm:pt-7 pt-6 md:pb-12 sm:pb-10 pb-8 md:pl-[35px] pl-7 md:pr-[28px] pr-5" data-aos="flip-right" data-aos-easing="linear"
                data-aos-duration="1000"
            >
                <p className="text-black font-poppins text-[28px] font-semibold leading-[89.286%]">
                    {Premium === "tabone" && (<div>{myArray.heading}</div>)}
                    {Premium === "tabsecond" && (<div>{myArray.heading4}</div>)}
                </p>
                <p className="md:pt-[11px] sm:pt-2 pt-1 text-black text-xs font-normal leading-[150%] max-w-[237px] font-poppins">
                    with all your customers via all conversation channels in one
                    central dashboard.
                </p>
                <p className="font-poppins text-black md:text-[42px] text-3xl font-semibold leading-[76.19%] md:pt-7 sm:pt-5 pt-4">
                    {Premium === "tabone" && (<div>{myArray.heading2}</div>)}
                    {Premium === "tabsecond" && (<div>{myArray.heading3}</div>)}
                </p>
                <p className="text-black font-poppins text-[14px] font-[300] pt-[11px] leading-[100%]">
                    {toggle ? "Per year" : "Per month"}
                </p>
                {/* <button className="leading-[ 228.571%] text-nowrap font-semibold text-[14px] font-poppins text-black md::px-14 md:py-[13px] px-12 py-2 border-[2px] border-black rounded-[12px] md:mt-[35px] mt-6">
                Choose this Plan
              </button> */}
                <div className="flex justify-center">
                    < button class="relative flex h-[50px] w-[235px]  items-center justify-center overflow-hidden font-poppins text-[14px] font-semibold text-black text-nowrap rounded-[12px] border-[2px] mt-9   border-solid border-[#000000]  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:!bg-[#B00000] hover:border-[2px] hover:solid hover:!border-[transparent] before:duration-500 before:ease-out hover:text-[white] p-[14px_60px] hover:shadow-[0px_0px_64px_0px_#B000004D] hover:before:w-56 hover:before:h-56 " >
                        <span class="relative z-10">Choose this Plan</span>
                    </button >
                </div>
                <div className="flex items-center md:pt-[35px] pt-7 pb-2 md:pb-4">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">2GB SSD</p>
                </div>
                <div className="flex items-center md:pb-[15px] pb-2">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">10GB Bandwidth</p>
                </div>
                <div className="flex items-center md:pb-[15px] pb-2">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">15 Email Accounts</p>
                </div>
                <div className="flex items-center md:pb-[15px] pb-2">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">Unlimited Database</p>
                </div>
                <div className="flex items-center md:pb-[15px] pb-2">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">4 Subdomains</p>
                </div>
                <div className="flex items-center md:pb-[15px] pb-2">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">1 Parked Domain</p>
                </div>
                <div className="flex items-center md:pb-[18px] pb-2 ">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">2 Websites</p>
                </div>
                <div className="flex items-center md:pb-[15px] pb-2">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">Free SSL</p>
                </div>
                <div className="flex items-center">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">Softaculous</p>
                </div>
            </div>
        </div>
    ))

    return (
        <div className=" lg:pt-32 md:pt-20 sm:pt-12 pt-5">
            <div className="container max-w-[1097px] mx-auto px-3">
                <div className="flex justify-center flex-col">
                    <h2 className="text-black font-poppins text-center mx-auto md:text-[50px] md:!leading-[60px]  sm:text-4xl text-3xl font-semibold  lg:max-w-[650px] ">
                        Ready to get started with Lemon Wares?
                    </h2>
                    <p className="md:pt-6  pt-3 text-black font-poppins md:text-[25px] text-xl font-normal leading-[25px] text-center mx-auto">
                        Choose the package that suits you
                    </p>
                    <div className="flex justify-center ml-auto items-center">
                    </div>
                    <div className="lg:pt-[57px] md:pt-2 sm:pt-4 mt-6  flex items-center  md:mb-18 sm:mb-10 mb-8 justify-center">
                        <p className=" text-black font-poppins md:text-[25px] text-[20px] font-normal leading-[100%] ">
                            Monthly
                        </p>
                        <div
                            className={`relative md:w-[93px] w-[63px] h-[30px] md:h-[50px] ml-8 px-[9px] py-[10px] cursor-pointer rounded-[73px] duration-500  ${toggle ? "bg-yellow-400" : " bg-[#B00000]"}`}
                            onClick={btn}
                        >
                            <div
                                className={`bg-white md:h-[30px] h-[20px] md:w-[30px] w-[20px] max-md:top-[20%] absolute rounded-full duration-500 transition-all ${toggle ? "right-[10%]" : "left-[10%]"
                                    }`}
                            ></div>
                        </div>
                        <div className="flex fle x md:gap-[17px] gap-2 max-md:pl-7  flex-c ol items-center justify-center">
                            <p className=" text-black font-poppins md:pl-7 md:text-[25px] text-[20px] font-normal leading-[100%]">
                                Yearly
                            </p>
                            < button className="relative flex h-[24px] w-[87px] items-center justify-center overflow-hidden font-poppins text-[10px] font-medium text-black p-[7px_8px] rounded-[8px] bg-[#FFE87A] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#B00000] hover:border-[transparent] before:duration-500 before:ease-out hover:text-[white] hover:border-0 hover:shadow-[0px_0px_64px_0px_#B000004D] hover:before:h-56 hover:before:w-56" >
                                <span className="relative z-10 text-nowrap"> 20 % discount</span>
                            </button >
                        </div>
                    </div>
                    <div className="flex items-center border-b-[4px] lg:mb-24 md:mb-20 sm:mb-14 mb-8 max-w-[856px] justify-center w-full mx-auto">
                        <p
                            className={`text-black font-poppins md:text-[30px] text-2xl font-semibold leading-[40px] cursor-pointer text-center relative w-1/2 ${Premium === "tabone"
                                ? "after:bg-[#B00000] after:w-full after:h-1 after:absolute after:bottom-[-4px] after:z-[2] after:left-0"
                                : ""
                                }`}
                            onClick={() => latest("tabone")}
                        >
                            Basic
                        </p>
                        <p
                            className={`text-black font-poppins md:text-[30px] text-2xl font-semibold leading-[40px] cursor-pointer text-center relative w-1/2 ${Premium === "tabsecond"
                                ? "after:bg-[#B00000] after:w-full after:h-1 after:absolute after:bottom-[-4px] after:z-[2] after:left-0"
                                : ""
                                }`}
                            onClick={() => latest("tabsecond")}>
                            Premium
                        </p>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap -mx-3 justify-center">
                    {data}
                </div>
            </div>
        </div>
    );
};

export default Lamon;
