import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Vrindashrit",
  description: "In the service of Lotus Feet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap"

          />
          <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
          />
      </head>
      <body
        className="h-full w-full bg-[#15302d] text-white ">

          <Navbar />
          {children}
          <Footer/>
       
      </body>
    </html>
  );
}
