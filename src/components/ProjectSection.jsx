import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ProjectData } from '../constant/ProjectData';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

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

export const ProjectSection = () => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>
            < div className='text-2xl font-bold' > - Latest Projects -</div >
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex flex-col gap-4 pt-2 px-5"
            >
                {ProjectData.map((project, index) =>
                    <ProjectCard key={index} project={project} variants={itemVariants} />
                )
                }
            </motion.div>
        </>
    )
}

