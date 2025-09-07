import React, { memo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import GitIcon from './GitIcon';
import LiveDemoIcon from './LiveDemoIcon';

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100 },
    },
};

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            variants={itemVariants}
            className="rounded-xl border border-white/15 overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white/5 backdrop-blur-sm"
        >
            <div className="w-full overflow-hidden">
                <motion.img
                    src={project.Image}
                    alt={project.ImageAlt}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover"
                    loading="lazy"
                    decoding="async"
                    variants={itemVariants}
                />
            </div>
        <div className="p-4">
                <div className="flex justify-between items-start gap-4">
            <h3 className="text-lg md:text-xl font-semibold leading-tight font-mono">{project.Title}</h3>
                    <div className="flex gap-4 shrink-0">
                        {project.GitLink && (
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                href={project.GitLink} target="_blank" rel="noopener noreferrer" >
                                <GitIcon />
                            </motion.a>
                        )}
                        {project.LiveDemoLink && (
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                href={project.LiveDemoLink} target="_blank" rel="noopener noreferrer" >
                                <LiveDemoIcon />
                            </motion.a>
                        )}
                    </div>
                </div>

                <div className="mt-2 text-[12px] md:text-sm italic flex gap-2 justify-start items-center flex-wrap font-mono">
                    {project.Technology.map((tech, index)=> (
                        <div className="border border-white/20 px-2 py-1 rounded-md" key={index}>{tech}</div>
                    ))}
                </div>

                <p className="mt-3 text-sm md:text-base text-white/90">{project.Description}</p>
                {project.Features?.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 text-xs md:text-sm space-y-1">
                        {project.Features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
};

export default memo(ProjectCard);
