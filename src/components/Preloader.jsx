import React, { useEffect, useState } from "react";
import preloder from '../assets/images/logo.png'

const Preloder = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-[#fff] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center">
                    <div class="relative flex justify-center items-center">
                        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#B00000]"></div>
                        <img src={preloder} alt="cpanel" className="rounded-full h-20 w-20" />
                    </div>
                
                </section>
            ) : (
                ""
            )}
        </>
    )
}

export default Preloder