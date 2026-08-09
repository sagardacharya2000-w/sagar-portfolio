
import { motion } from "framer-motion";
import { projects } from '../constants/constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 

const Projects = () => {
  return (
    <motion.div
     initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1, ease:"easeOut"}}
    viewport={{once:false, amount:0.2}}
    id='projects'
    className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className='text-3xl font-bold text-center mb-4'>
          My
          <span className="text-purple">Projects</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Section of my recent works</p>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* project cards */}

          {
            projects.map((project, index)=>(
           <div
           key={index}
           className="bg-dark-300 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple/50 transition duration-300 flex flex-col justify-between hover:-translate-y-2"
           >
            <div>

              {/* project image */}

              <div className="h-48 bg-dark-200 overflow-hidden">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              { /* content */}

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* tech Badges */}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((item, techIndex) =>(
                   <span 
                   key={techIndex}
                   className="bg-dark-200 text-purple text-xs font-medium px-2.5 py-1 rounded-md border border-purple/20"
                   >
                    {item}
                   </span>
                  ))}

                </div>

              </div>
            </div>

            {/* Action Links */}

            <div className="p-6 pt-0 flex gap-4 items-center">
              <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <FaGithub className="text-lg"/> Code
              </a>
              <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-purple hover:bg-purple/80 text-white px-4 py-2 rounded-lg transition ml-auto"
              >
                <FaExternalLinkAlt className="text-xs"/> Demo
              </a>

            </div>

           </div>
            ))
          }

        </div>

      </div>
      
    </motion.div>
  )
}

export default Projects
