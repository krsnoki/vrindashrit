"use client";
import React from 'react';

import Image from 'next/image'
const  About = () => {
    return (
      <div className="max-w-[1200px] mx-auto h-full py-40 pb-10 md:pb-20 px-4" 
      id="about">
        <h1 className='text-center text-[#EBD5B8] text-4xl md:6xl sm:xl mx-auto px-2 font-cinzel'>About <span className='font-semibold bg-gradient-to-r from-[#ff9f1c] via-[#ffcb47] to-amber-600 bg-clip-text text-transparent font-cinzel'>Vrindashrit</span></h1>


        <div className="grid grid-cols-8 gap-6 palce-items-center mt-12">
        <div className="w-full col-span-8 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-8 md:p-12">
  <div className="absolute inset-0 bg-gradient-to-r from-[#ff9f1c] via-[#1b4541] to-amber-500 opacity-30 animate-gradient-xy z-0"></div>
  
  {/* Card Content Wrapper */}
  <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
    {/* Image Section */}
    <Image 
      src="/vrida.jpeg" 
      alt="Vrindashrit Sewa Trust" 
      className="w-40 h-40 md:w-60 md:h-60 rounded-full z-10 shadow-2xl"
      width={150}
      height={150}
    />

    {/* Text Section */}
    <div className="text-center md:text-left z-10">
      <h2 className="text-center text-2xl font-bold text-white/80 font-dm mb-2">
        Vrindashrit Sewa Trust
      </h2>
      <p className="text-lg text-white/70 font-mukta">
        Vrindashrit Sewa Trust is a nonprofit organization with a profound commitment to both environmental conservation and spiritual well-being.
        <span className="hidden md:inline">Inspired by the rich heritage of Vrindavan, the trust aims to create a cleaner, more sustainable environment through community-driven initiatives that blend ecological responsibility with spiritual values. We believe that a pure environment supports a pure mind and spirit, and our mission is to bring this vision to life in our communities.</span></p>
    </div>
  </div>
</div>

            <div className="w-full col-span-4 row-span-auto md:row-span-3 relative bg-white/10 blackdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-6">
                <div className='absolute inset-0 bg-gradient-to-r from-purple-800 via-[#1b4541] to-amber-500 opacity-30 animate-gradient-xy z-0'></div>
               
                <div className='flex flex-col gap-10'>
                    {/* <Image src="/vrida.jpeg" 
                     alt="About" 
                     className='w-auto row-span-2 z-10'
                     width={250}
                     height={100}
                     /> */}
                     <div className="col-span-2 mt-4 ml-3 z-10 text-center" >
                        <h2 className='text-2xl font-dm font-bold text-white'>Vision</h2>
                        <p className='text-lg text-white mt-2'>At Vrindashrit Sewa Trust, we believe in leading by example, inspiring positive change through dedicated action and a collective spirit.
                        <span className="hidden md:inline">
  Together, we can create an environment that nurtures both nature and the human spirit, upholding Vrindavan&apos;s legacy of reverence for life and all its gifts.
</span>                        </p>
                     </div>
                </div>
            </div>

            <div className="w-full col-span-4 row-span-auto md:row-span-3 relative bg-white/10 blackdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-6">
                <div className='absolute inset-0 bg-gradient-to-r from-purple-800 via-[#1b4541] to-amber-500 opacity-30 animate-gradient-xy z-0'></div>
               
                <div className='flex flex-col items-center gap-4'>
                    {/* <Image src="/vrida.jpeg" 
                     alt="About" 
                     className='rounded-full z-10'
                     width={100}
                     height={100}
                     /> */}
                     <div className="col-span-3 mt-4 ml-3 z-10 text-center" >
                        <h2 className='text-2xl font-bold text-white font-dm'>Mission</h2>
                        <p className='text-lg text-white mt-2'><span className="hidden md:inline">Our mission is to inspire respect for nature as a core part of spiritual practice.</span> 
                        Through cleanliness drives, awareness campaigns, and sustainable habits, we connect spirituality with environmental care, guided by the teachings of Vrindavan.</p>
                     </div>
                </div>
            </div>
            <div className="w-full col-span-8 relative bg-white/10 blackdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-6">
                <div className='absolute inset-0 bg-gradient-to-r from-[#ff9f1c] via-[#1b4541] to-amber-500 opacity-30 animate-gradient-xy z-0'></div>
               
                <div className='flex flex-col items-center gap-4'>
                     <div className="col-span-3 mt-4 z-10 text-center" >
                        <h2 className='text-2xl font-bold text-white font-dm'>Founders</h2>
                        <div className='grid md:grid-cols-3 md:gap-24 md:grid-rows-1 grid-rows-3 content-center'>
                            <p className='md:col-span-1 text-lg text-white mt-2'>Mrs. Bula Chakraborty</p>
                            <p className='md:col-span-1 text-lg text-white mt-2'>Anant Ram Das Bramhachari</p>
                            <p className='md:col-span-1 text-lg text-white mt-2'>Riju Chakraborty</p>
                        </div>
                        
                     </div>
                </div>
            </div>
        </div>

      </div>
    )
}

export default  About;