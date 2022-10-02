import Image from "next/image";
import React from "react";
import Teste from "../../public/images/MyImage.jpg";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex flex-col items-center md:flex-row mx-auto z-0 justify-evenly text-left overflow-hidden max-w-full"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-primary-800">
        Projects
      </h3>

      <div className="relative  w-full flex overflow-x-scroll snap-x snap-mandatory z-20 overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary-500">
        {projects.map((project) => (
          <div
            key={project}
            className="w-screen flex-shrink-0  snap-center flex flex-col space-y-5 items-center justify-center  md:p-44 h-screen "
          >
            <motion.div
              initial={{
                y: -200,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              className="w-36 h-36 relative "
            >
              <Image src={Teste} alt="" layout="fill" />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl text-center font-semibold ">
                Site aluguél de carros!
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-primary-500/10 h-[500px] absolute top-[30%] left-0 -skew-y-12 "></div>
    </motion.div>
  );
};

export default Projects;
