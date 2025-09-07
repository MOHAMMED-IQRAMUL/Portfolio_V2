import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ProjectData } from '../constant/ProjectData';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { useThemeStore } from '../store/useThemeStore';
import { getTheme } from '../utils/getTheme';
import { containerVariants } from '../utils/variants';

import { useEffect, useState } from 'react';

export const ProjectSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [showAll, setShowAll] = useState(false);
    const [initialCount, setInitialCount] = useState(3);
    const { theme } = useThemeStore();

    useEffect(() => {
        const calc = () => {
            const w = window.innerWidth;
            if (w >= 1280) return setInitialCount(6);
            if (w >= 1024) return setInitialCount(4);
            if (w >= 768) return setInitialCount(3);
            return setInitialCount(2);
        };
        calc();
        window.addEventListener('resize', calc);
        return () => window.removeEventListener('resize', calc);
    }, []);

    const projectsPerPage = initialCount;
    const visibleProjects = showAll ? ProjectData : ProjectData.slice(0, projectsPerPage);

    return (
        <>
            <div className='font-mono text-2xl md:text-3xl font-semibold tracking-tight'>- Latest Projects -</div>

            <div className="relative">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-4 px-2 sm:px-4"
                    style={{ maxHeight: showAll ? 'none' : '100vh', overflow: showAll ? 'visible' : 'hidden' }}
                >
                    {visibleProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </motion.div>

                {!showAll && ProjectData.length > projectsPerPage && (
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
                )}
            </div>

            <div className="flex justify-center mt-6 font-mono">
                {!showAll && ProjectData.length > projectsPerPage && (
                    <button
                        className={`px-4 py-2 rounded-lg border bg-black/60 backdrop-blur-sm hover:bg-black/80 transition ${getTheme(theme)}`}
                        onClick={() => setShowAll(true)}
                    >
                        Show More
                    </button>
                )}
                {showAll && (
                    <button
                        className={`px-4 py-2 rounded-lg border bg-black/60 backdrop-blur-sm hover:bg-black/80 transition ${getTheme(theme)}`}
                        onClick={() => setShowAll(false)}
                    >
                        Show Less
                    </button>
                )}
            </div>
        </>
    );
}

