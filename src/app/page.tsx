import Navbar from "@/components/body/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/body/Footer";
import Resume from "@/components/sections/Resume";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Features />
        <Projects />
        <Resume />
        {/* <Contact /> */}
        <Footer />
      </main>
    </>
  );
}
