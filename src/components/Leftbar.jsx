import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useThemeStore } from '../store/useThemeStore'
import { getTheme } from '../utils/getTheme'
import image from '../assets/profile-pic.jpeg'
import { LeftSideBarData } from '../constant/data.jsx'

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


const Leftbar = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2});
    const { theme } = useThemeStore();
    return (
        <div className='w-1/4 p-4 ' >
            <motion.div ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                
                className="flex flex-col items-center border-2 rounded-lg w-fit mx-auto p-2 sticky top-10"
            >
                <motion.img src={image} alt="IQRAMUL" className='w-[300px] h-[300px] rounded-lg' variants={itemVariants} />

                <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mt-5">
                    <h1 className='font-bold text-2xl'>MOHAMMED IQRAMUL</h1>
                    <h3>Software Enginner</h3>
                    <h3>Full Stack Web Developer</h3>
                </motion.div>
                <div className="flex flex-col items-center justify-center mt-5 gap-2">
                    {LeftSideBarData.map((item) => (
                        <motion.div
                            key={item.Name}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className={`border-2 p-2 rounded-lg px-4 text-center cursor-pointer bg-transparent  ${getTheme(theme)}`}
                        >
                            <div className="w-[150px] flex items-center gap-2 mx-auto"><div className="w-[30px]"> {item.svg} </div> <div className="">{item.Name}</div> </div>
                           
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </div>
    )
}

export default Leftbar;