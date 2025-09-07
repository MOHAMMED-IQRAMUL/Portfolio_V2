// ProjectCard.jsx
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
            className="rounded-lg border-2 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col md:flex-row"
        >
            {/* Project Image */}
            <motion.img
                src={project.Image}
                alt={project.ImageAlt}
                className="w-full md:w-1/3 m-2 max-h-[270px] object-fit rounded-lg  "
                variants={itemVariants}
            />

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-center ">
                        <h3 className="text-2xl font-bold mb-2">{project.Title}</h3>

                        <div className="flex gap-4">
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
                    <div className="text-sm mb-2 italic flex gap-2 justify-start items-center flex-wrap">{project.Technology.map((tech, index)=>(
                        <div className="border-2 p-1 rounded-lg" key={index}>{tech}</div>
                    ))}</div>
                    <p className="mb-2">{project.Description}</p>
                    <ul className="list-disc pl-5 text-sm">
                        {project.Features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
