import React, { useEffect, useState } from 'react'
import { TechnicalProficiency, WebDevelopment } from '../constant/data';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectSection } from './ProjectSection';
import { ContactSection } from './ContactSection';
import { useInView } from 'react-intersection-observer';
import { useThemeStore } from '../store/useThemeStore';
import { getTheme } from '../utils/getTheme';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { scrollToId } from '../constant/functions';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100 },
    },
};


const roles = [
    'Full stack web development',
    'Competitive programmer',
    'WEB 3 exploring',
];

const Rightbar = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const { theme } = useThemeStore();

    const [roleIndex, setRoleIndex] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setRoleIndex((i) => (i + 1) % roles.length);
        }, 2200);
        return () => clearInterval(id);
    }, []);

    const Highlight = ({ children }) => (
        <motion.span
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            className={`font-semibold underline decoration-dotted underline-offset-4 ${getTheme(theme)}`}
        >
            {children}
        </motion.span>
    );

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'} className="w-full p-2"
        >

            <motion.div ref={ref}
                variants={itemVariants} id="about" className="TOP px-2 md:px-4 pt-6 md:pt-8 min-h-[80vh] flex flex-col gap-6 justify-center">
                <motion.div variants={itemVariants} className='INTRO border border-white/15 rounded-xl bg-white/5 backdrop-blur-sm p-5 md:p-6'>
                    <div className='text-2xl md:text-3xl font-semibold tracking-tight'>About Me</div>
                    <div className="text-base md:text-lg mt-2 text-white/80">
                        I’m currently into
                        <span className="ml-2 inline-block">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roles[roleIndex]}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35 }}
                                    className={`px-2 py-1 rounded-md bg-white/10 ${getTheme(theme)}`}
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </div>
                    <p className='text-justify pt-3 text-white/90 leading-relaxed'>
                        👋 I’m <Highlight>Mohammed Iqramul</Highlight> — a passionate <Highlight>Full Stack Developer</Highlight> and
                        final-year <Highlight>B.Tech CSE</Highlight> student at Galgotias University. I build
                        <Highlight> scalable</Highlight> and <Highlight>production-ready</Highlight> web apps, blending front‑end
                        creativity with back‑end efficiency. 
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {['Full Stack', 'GenAI', 'Production‑Ready', 'Open Source', 'UI/UX'].map((t) => (
                            <motion.span
                                key={t}
                                whileHover={{ scale: 1.05 }}
                                className="border border-white/20 px-3 py-1.5 rounded-lg bg-black/20 text-sm"
                            >
                                {t}
                            </motion.span>
                        ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => scrollToId("projects")}  className={`cursor-pointer px-4 py-2 rounded-lg border bg-black/60 hover:bg-black/80 transition ${getTheme(theme)}`}>View Projects</motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => scrollToId("contact")}  className={`cursor-pointer px-4 py-2 rounded-lg border bg-black/60 hover:bg-black/80 transition ${getTheme(theme)}`}>Contact Me</motion.div>
                        <a href="https://github.com/MOHAMMED-IQRAMUL" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/mohammed-iqramul" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="TECHSTACK border border-white/15 rounded-xl bg-white/5 backdrop-blur-sm p-5 md:p-6">
                    <div className='text-xl md:text-2xl font-semibold'>
                        Technical Proficiency
                    </div>
                    <p className="text-white/70 text-sm mt-1">Tools and foundations I rely on</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 mt-4">
                        {TechnicalProficiency.map((item) => (
                            <motion.div
                                key={item.Name}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="border border-white/15 rounded-lg bg-white/5 p-3 flex items-center gap-2"
                            >
                                <span className="w-7 h-7 rounded-md bg-white/10 grid place-items-center shrink-0">
                                    {item?.svg}
                                </span>
                                <span className="text-sm md:text-base">{item.Name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="WEBDEV border border-white/15 rounded-xl bg-white/5 backdrop-blur-sm p-5 md:p-6">
                    <div className='text-xl md:text-2xl font-semibold'>
                        Full Stack Web Development
                    </div>
                    <p className="text-white/70 text-sm mt-1">Frameworks and tools I use to design, build, and deploy</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 mt-4">
                        {WebDevelopment.map((item) => (
                            <motion.div
                                key={item.Name}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="border border-white/15 rounded-lg bg-white/5 p-3 flex items-center gap-2"
                            >
                                <span className="w-7 h-7 rounded-md bg-white/10 grid place-items-center shrink-0">
                                    {item?.svg}
                                </span>
                                <span className="text-sm md:text-base">{item.Name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <div id="projects" className="MIDDLE min-h-screen px-2 md:px-4 lg:px-6 pt-6 md:pt-8 flex flex-col gap-4">
                <ProjectSection />
            </div>

            <div id="contact" className="min-h-screen px-2 md:px-4 lg:px-6 pt-6 md:pt-8">
                <ContactSection />
            </div>

        </motion.div>
    )
}

export default Rightbar;