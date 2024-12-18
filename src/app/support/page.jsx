"use client";

import { useState } from "react";
import Modal from "@/components/donatemodal";
import Image from "next/image";


const Support = () => {

    const [showModal, setShowModal] = useState(false);

    const handleDonate = () => {
      setShowModal(true); 
    };
  
    const handleCloseModal = () => {
      setShowModal(false); 
    };
  


    return (
        <div className='flex flex-col h-auto md:h-screen items-center bg-background my-[2.5rem] md:px-[10rem] px-[3rem]'>
        <h1 className='text-center text-[#EBD5B8] text-3xl md:text-4xl  m-[0.5em] font-semibold font-cinzel '>Contribute with Support</h1>

        <div className="flex items-center md:flex-row flex-col w-full h-auto m-[2rem]">
            {/* join us
            Telegram link
            mailing option and whatsapp join button
            */}
            <div className="flex md:col-span-6 flex-col p-2 border-white w-full items-center">
                <h3 className="font-thin md:text-3xl text-2xl m-4 font-dm text-[#EBD5B8]">Join Us</h3>
                <div className="flex flex-row items-center ">
                <div className="px-6">
                    <p>At Whatsapp</p>
                    <div className="">
                    <a href='https://chat.whatsapp.com/INwYpudz4TaBYUBnozta6M' target="_blank">
                            <Image className='transition-transform duration-200 ease-in-out hover:scale-150'
                            src="/whatsapp.png"
                            width={120}
                            height={120}
                            alt="Vrindashrit"
                            /> 
                        </a>
                        
                    </div>
                    </div>
                  <div className="flex flex-col border-l border-white px-3 justify-center items-center w-[10rem] h-[8rem]">
                      <p>At Telegram</p>
                    <div className="h-[7rem] py-[1rem]">
                    <a href='https://t.me/Vrindashrit ' target="_blank">
                            <Image className='transition-transform duration-200 ease-in-out hover:scale-105'
                            src="/telegram.png"
                            width={70}
                            height={70}
                            alt="Vrindashrit"
                            /> 
                        </a>
                        
                    </div>
                    </div>
                </div>
                
            </div>

            {/* 
            Donate button
            paypal gateway
            */}
                        {/* Donation Section */}
                <div className="col-span-6 w-full md:border-l border-t sm:border-t-0 flex flex-col items-center mt-8 p-4">
                    <h3 className="text-2xl md:3xl font-thin font-dm text-[#EBD5B8] mt-5">Contribute</h3>
                    <button
                    onClick={handleDonate}
                    className="bg-teal-600 text-white font-bold text-xl font-dm py-2 px-4 rounded hover:bg-purple-700 transition duration-300 my-6  md:my-[4rem] justify-center h-[4rem] w-[20rem]"
                    >
                    Donate Now
                    </button>
                    {showModal && <Modal message="Under construction" onClose={handleCloseModal} />}
                </div>
        </div>
        </div>
    )
}

export default Support;