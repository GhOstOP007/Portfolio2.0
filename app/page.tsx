import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Expereince";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[rgba(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-orange-500/80">
      <Header />

      {/*Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/*About*/}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/*Experience*/}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/*Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/*Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/*Contact */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://lh3.googleusercontent.com/a/ACg8ocLGIas3WdG0Lmt3dSxDajmHwjivKt0fmJDjQMJP4jeX1wI=s288-c-no"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
