import Image from 'next/image'

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center w-full h-screen max-h-[100vh] py-16 relative overflow-hidden z-10
                 bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-center
                 before:content-[''] before:absolute before:inset-0 before:block
                 before:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] before:from-[#1b4541] before:via-transparent before:to-[#fbbb64]
                 before:opacity-100 before:z-[-5]"
    >
      <div className='absolute inset-0 bg-gradient-to-t from-[#15302d]'></div>
          {/* Hero Text */}
          <div className="md:w-24 md:h-24 lg:w-24 lg:h-24 sm:w-18 sm:h-18">
            <Image
            className='rounded-full transition-transform transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'
            src="/vrida.jpeg"
            width={100}
            height={100}
            alt="Vrindashrit"
            />
          </div>
          <div className="relative text-center md:text-center z-10 px-4 py-6" >
              <h1 className="text-[5vh] md:text-[10vh] leading-tight font-bold font-cinzel bg-gradient-to-r from-[#1b4541] via-emerald-600 to-[#1b4541] bg-clip-text text-transparent p-0 transition-transform duration-300 ease-in-out hover:scale-105">
                  Vrindashrit
                  
                  <span className="block text-[1vh] md:text-sm text-[#1b4542] font-courier font-semibold m-0">
                  In the service of Lotus Feet
              </span>
              </h1>
            
          </div>
      </div>
  );
}

export default Hero;
