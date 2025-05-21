'use client';

import { useInView } from '@/app/hooks/useInView';
import { motion } from 'framer-motion';

export default function AboutMe() {
    const { ref, isVisible } = useInView();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <section id="about" className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-3xl font-normal">&lt;Sobre mim/&gt;</h1>
                <p className="text-justify text-[12px] text-zinc-300 sm:text-lg">
                    Olá, meu nome é <strong>Igor Barreto</strong>, sou estudante de Análise e
                    Desenvolvimento de Sistemas no Instituto Federal de Educação,
                    Ciência e Tecnologia de Rondônia - IFRO. Apaixonado por tecnologia,
                    inovação e pelo desenvolvimento de interfaces que entregam experiências positivas ao usuário.
                    Participei de um projeto de pesquisa que resultou na criação de um sistema de gerenciamento
                    de horários para a faculdade, o que me permitiu trabalhar com desenvolvimento
                    real e colaborar em equipe.
                    Estou em constante aprendizado, buscando sempre evoluir como desenvolvedor front-end e
                    contribuir com soluções criativas, bem estruturadas e funcionais.
                </p>
            </section>
        </motion.div>
    )
}