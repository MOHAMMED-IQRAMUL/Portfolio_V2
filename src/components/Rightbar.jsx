import React from 'react'
import { TechnicalProficiency, WebDevelopment } from '../constant/data';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ProjectSection } from './ProjectSection';
import { ContactSection } from './ContactSection';
import { useInView } from 'react-intersection-observer';

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


const Rightbar = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'} className="w-3/4 p-2 "
        >

            <motion.div             ref={ref}
 variants={itemVariants} id="about" className="TOP pr-4 pt-4 min-h-[100vh] flex flex-col gap-7  justify-center items-center">
                <div className='INTRO'>
                    <div className='text-lg font-bold'>- About Me -</div>
                    <div className='text-justify pt-2'>👋 Hi, I'm Mohammed Iqramul — a passionate Full Stack Developer and 3rd-year B.Tech Computer Science student at Galgotias University.
                        I build scalable and production-ready web applications, blending front-end creativity with back-end efficiency.
                        Currently diving deep into Generative AI and modern web technologies.
                        Find me on GitHub for code and on LinkedIn for updates and insights.
                    </div>
                </div>
                <hr />
                <div className="TECHSTACK">
                    <div className='text-lg font-bold'>
                        - Technical Proficiency -
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {TechnicalProficiency.map((item) => (
                            <div key={item.Name} className="border-2 p-1 px-3 rounded-lg w-fit text-center cursor-pointer bg-transparent flex justify-center items-center gap-2">
                                {item?.svg}  {item.Name}
                            </div>
                        ))}
                    </div>

                </div>
                <div className="WEBDEV">
                    <div className='text-lg font-bold'>
                        - Full Stack Web Development -
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {WebDevelopment.map((item) => (
                            <div key={item.Name} className="border-2 p-1 px-3 rounded-lg w-fit text-center cursor-pointer bg-transparent flex justify-center items-center gap-2">
                                {item?.svg}  {item.Name}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            <div id="projects" className="MIDDLE min-h-screen pr-4 pt-4 flex flex-col gap-4">
                <ProjectSection />
            </div>

            <div id="contact" className="min-h-screen pr-4 pt-4">
                <ContactSection />
            </div>

        </motion.div>
    )
}

export default Rightbar;