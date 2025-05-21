'use client';

import { useInView } from '@/app/hooks/useInView';
import { motion } from 'framer-motion';

import { IoLogoCss3 } from "react-icons/io";
import { RiHtml5Line, RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

export default function Technologies() {

    const { ref, isVisible } = useInView();
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <section className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold">&lt;Princiais Tecnologias/&gt;</h1>
                <div className="grid grid-cols-4 gap-y-10">
                    <div className="flex flex-col justify-center items-center">
                        <p>HTML</p>
                        <RiHtml5Line className="text-amber-800" size={80} />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p>CSS</p>
                        <IoLogoCss3 className="text-blue-700" size={80} />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p>Javascript</p>
                        <RiJavascriptFill className="text-yellow-500" size={80} />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p>Typescript</p>
                        <BiLogoTypescript className="text-blue-500" size={80} />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p>React</p>
                        <FaReact className="text-cyan-600" size={80} />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p>Tailwind CSS</p>
                        <RiTailwindCssFill className="text-cyan-700" size={80} />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p>Next.js</p>
                        <RiNextjsFill size={80} />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p>Github</p>
                        <FaGithub size={80} />
                    </div>
                </div>
            </section>
        </motion.div>
    )

}