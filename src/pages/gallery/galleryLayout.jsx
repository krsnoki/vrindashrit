import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// components/galleryLayout.jsx
const GalleryLayout = ({ children }) => {
  return (
    <div className="h-full w-full bg-[#15302d]">
      
      <Navbar />
      <div className="px-20 md:m-6 sm:m-4 lg:m-10 xl:m-8 overflow-y-auto overflow-x-hidden">
        {children}
      </div>
      <Footer />
      
    </div>
  );
};

export default GalleryLayout;
