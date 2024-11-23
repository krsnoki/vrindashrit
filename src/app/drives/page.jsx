"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { RxArrowTopRight, RxCross2 } from 'react-icons/rx';
import { ServiceData } from '@/constants';
import Link from 'next/link';

const DriveCarousel = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className='flex flex-col h-screen items-center bg-background'>
            <h1 className='text-center font-semibold text-[#EBD5B8] text-4xl md:text-6xl sm:text-xl mx-auto px-2 font-sans py-20'>Our Drives</h1>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 5
                    },
                //     550: {
                //         slidesPerView: 2,
                //         spaceBetween: 6,
                //     },
                    650: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    }
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination, Autoplay]}
                className='md:max-w-[100%] lg:max-w-[80%] max-w-[90%]'
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <motion.div 
                            onClick={() => setSelectedId(item.id)}
                            className='flex flex-col gap-2 md:gap-2 mb-20 group relative shadow-lg text-white rounded-xl px-4 py-10 h-[40vh] w-[85vw] md:h-[45vh] md:w-[26vw] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-105 overflow-hidden cursor-pointer'
                        >
                            {/* Background image */}
                            <div
                                className='absolute inset-0 bg-cover bg-center rounded-xl'
                                style={{ backgroundImage: `url(${item.backgroundImage})`, zIndex: -1 }}
                            />
                            <Link href={`/gallery/${item.id}`}>
                            {/* Overlay with hover effect */}
                            <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50 group-hover:rounded-xl transition-opacity duration-300' />

                            {/* Main content */}
                            <div className='relative flex flex-col gap-3 text-white z-10 '>
                                <motion.h5 className='text-xl lg:text-2xl font-bold bg-black bg-opacity-20 rounded-xl px-4 py-2'>{item.title}</motion.h5>
                                {/* <motion.h2 className='lg:text-[18px] font-semibold bg-black bg-opacity-20 rounded-xl px-4 py-2'>{item.content}</motion.h2> */}
                            </div>
                            <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-gray-400 group-hover:rotate-45 duration-100' /></Link>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

          

        </div>
    );
};

export default DriveCarousel;
