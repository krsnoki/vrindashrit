// import '../../app/globals.css';
// // import { RxVideo } from 'react-icons/rx'; 
// import { FiVideo } from 'react-icons/fi';

// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { ServiceData } from '@/constants';
// import GalleryLayout from './galleryLayout';

// const GalleryPage = ({ indexItem }) => {
//   const router = useRouter();
//   const { id } = router.query;

//   if (!indexItem) return <p>Gallery item not found.</p>;
//   if (!id) return <p>Index not found.</p>;

//   const { title, content, media } = indexItem;

//   return (
//     <GalleryLayout>
//       <div className='m-5 mb-10 text-white font-bold font-dm items-center w-full flex flex-col'>
//         <h1 className='text-4xl mb-2 text-amber-400'>{title}</h1>
//         <h4 className='text-xl'>{content}</h4>
//       </div>
//       <div className='h-auto w-full'>
     
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
//           {media.map((mediaItem, index) => (
//             <div
//               key={index}
//               className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex justify-center items-center"
//             >
//               {mediaItem.type === 'image' ? (
//                 <Image
//                   src={mediaItem.url}
//                   alt={title || `Gallery item ${id}`}
//                   width={500}
//                   height={400} 
//                   className="w-full h-auto object-cover"
//                 />
//               ) : (
//                 <div className="relative w-full h-auto">
              
//                 {/* <RxVideo className="absolute top-2 left-2 z-10 text-white text-xl" /> */}
//                 <FiVideo className="absolute top-2 left-2 z-10 text-white text-xl" />
//                 <video
//                   src={mediaItem.url}
//                   width="400"
//                   height="300"
//                   loop
//                   muted
//                   playsInline
//                   onMouseEnter={(e) => e.target.play()}
//                   onMouseLeave={(e) => e.target.pause()}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </GalleryLayout>
//   );
// };

// export async function getServerSideProps(context) {
//   const { id } = context.params;

//   const indexItem = ServiceData.find((item) => item.id === parseInt(id));

//   if (!indexItem) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { indexItem },
//   };
// }

// export default GalleryPage;

import '../../app/globals.css';
import { FiVideo } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Slider from 'react-slick';
import { ServiceData } from '@/constants';
import GalleryLayout from './galleryLayout';

const GalleryPage = ({ indexItem }) => {
  const router = useRouter();
  const { id } = router.query;

  const [isOpen, setIsOpen] = useState(false); // Modal visibility
  const [currentIndex, setCurrentIndex] = useState(0); // Current media index

  if (!indexItem) return <p>Gallery item not found.</p>;
  if (!id) return <p>Index not found.</p>;

  const { title, content, media } = indexItem;

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const settings = {
    initialSlide: currentIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // We'll add custom buttons below
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex), // Keep track of the current index
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <GalleryLayout>
      <div className='m-5 w-auto h-auto text-white font-bold font-dm items-center w-full flex flex-col'>
        <h1 className='text-4xl mb-2 text-amber-400'>{title}</h1>
        <h4 className='text-xl'>{content}</h4>
      </div>
      <div className='h-auto w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          {media.map((mediaItem, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex justify-center items-center cursor-pointer"
              onClick={() => openModal(index)}
            >
              {mediaItem.type === 'image' ? (
                <Image
                  src={mediaItem.url}
                  alt={title || `Gallery item ${id}`}
                  width={500}
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="relative w-full h-auto">
                  <FiVideo className="absolute top-2 left-2 z-10 text-white text-xl" />
                  <video
                    src={mediaItem.url}
                    width="400"
                    height="300"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl font-bold z-20"
            >
              &times;
            </button>

            {/* Carousel */}
            <Slider {...settings} className="w-full h-full">
              {media.map((mediaItem, index) => (
                <div key={index} className="flex justify-center items-center w-full h-full">
                  {mediaItem.type === 'image' ? (
                    <Image
                      src={mediaItem.url}
                      alt={title || `Gallery item ${id}`}
                      width={1920}
                      height={1080}
                      className="w-full h-auto object-cover max-h-screen"
                    />
                  ) : (
                    <video
                      src={mediaItem.url}
                      controls
                      width="1920"
                      height="1080"
                      className="w-full h-auto object-cover max-h-screen"
                    />
                  )}
                </div>
              ))}
            </Slider>

            {/* Custom Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20 bg-gray-800 bg-opacity-60 rounded-full p-2"
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20 bg-gray-800 bg-opacity-60 rounded-full p-2"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </GalleryLayout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  const indexItem = ServiceData.find((item) => item.id === parseInt(id));

  if (!indexItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: { indexItem },
  };
}

export default GalleryPage;
