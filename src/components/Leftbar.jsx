import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useThemeStore } from '../store/useThemeStore'
import { getTheme } from '../utils/getTheme'
import image from '../assets/profile-pic.jpeg'
import { LeftSideBarData } from '../constant/data.jsx'

import { useInView } from 'react-intersection-observer';
import FloatingWrapper from './FloatingWrapper.jsx'

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


const Leftbar = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const { theme } = useThemeStore();
    return (
    <div className='w-full md:w-auto p-0 md:p-2 md:sticky md:top-24 md:self-start font-mono flex md:block justify-center'>
            <FloatingWrapper>
                <motion.div ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}

                    className="flex flex-col items-center border border-white/15 rounded-xl w-full md:w-fit mx-auto p-4 md:p-3 bg-white/5 backdrop-blur-sm"
                >
                    <motion.img src={image} alt="IQRAMUL" className='w-56 h-56 md:w-[280px] md:h-[280px] rounded-xl object-cover' variants={itemVariants} />

                    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mt-4 text-center">
                        <h1 className='font-semibold text-xl md:text-2xl tracking-tight'>MOHAMMED IQRAMUL</h1>
                        <h3 className='text-white/80 text-sm md:text-base'>Software Engineer</h3>
                        <h3 className='text-white/80 text-sm md:text-base'>Full Stack Web Developer</h3>
                    </motion.div>
                    <div className="flex flex-col items-center justify-center mt-5 gap-2 w-full">
                        {LeftSideBarData.map((item) => (
                            <motion.div
                                key={item.Name}
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className={`w-full md:w-auto border px-4 py-2 rounded-lg text-center cursor-pointer bg-white/5 ${getTheme(theme)}`}
                            >
                                <a href={item.url}>
                                    <div className="w-full md:w-[180px] flex items-center gap-5 mx-auto">
                                        <div className="w-[24px]"> {item.svg} </div>
                                        <div className="text-sm md:text-base">{item.Name}
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </FloatingWrapper>
        </div>
    )
}

export default Leftbar;