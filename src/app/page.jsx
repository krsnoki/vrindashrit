import Image from "next/image";

import Hero from "@/app/hero/page";
import About from "@/app/About/page";
import DriveCarousel from "@/app/drives/page";


export default function Home() {
  return (
    <>
    <main >
          <Hero />
          <About />
          <DriveCarousel/>
    </main>
    </>
  );
}
