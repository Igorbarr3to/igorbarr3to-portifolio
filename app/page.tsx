import Typewriter from "@/components/type-writer";

import AboutMe from "@/components/about-me";
import Technologies from "@/components/tecnologies";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <nav className="fixed top-0 w-full">
        <ul className="flex space-x-6 p-4 justify-center">
          <li><a href="#home" className="hover:underline">Início</a></li>
          <li><a href="#about" className="hover:underline">Sobre</a></li>
          <li><a href="#projects" className="hover:underline">Projetos</a></li>
          <li><a href="#contact" className="hover:underline">Contato</a></li>
        </ul>
      </nav>

      <div id="home" className="h-screen flex flex-col items-center justify-center gap-1">
        <p className="min-h-[40px]"> <Typewriter /> </p>
        <p>Desenvolvedor Front-End</p>
      </div>

      <main className="h-screen grid grid-cols-1 sm:grid-cols-2 place-items-center mx-16 gap-10">
        <div className="h-full flex items-center w-full">
          <AboutMe />
        </div>
        <div className="h-full flex items-center w-full">
          <Technologies />
        </div>
      </main>


    </div>
  );
}
