import Navbar from "@/components/body/Navbar";
import Hero from "@/components/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        {/* <Features /> */}
        {/* <Projects /> */}
        {/* <Resume /> */}
        {/* <Contact /> */}
      </main>
    </>
  );
}
