import Typewriter from "@/components/type-writer";

import AboutMe from "@/components/about-me";
import Technologies from "@/components/tecnologies";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="h-screen flex flex-col items-center justify-center gap-1">
        <p className="min-h-[40px]"> <Typewriter /> </p>
        <p>Desenvolvedor Front-End</p>
      </div>

      <main className="flex flex-col h-screen items-start sm:grid grid-cols-2 gap-40 mx-16">
        <AboutMe />
        <Technologies />
      </main>
    </div>
  );
}
