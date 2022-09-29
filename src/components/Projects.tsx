import Image from "next/image";
import React from "react";

import Teste from "../../public/images/MyImage.jpg";

const Projects: React.FC = () => {
  const projects = [1, 2, 3, 4];
  return (
    <div className="h-screen relative flex flex-col items-center md:flex-row mx-auto z-0 justify-evenly text-left overflow-hidden max-w-full">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-primary-800">
        Projects
      </h3>

      <div className="relative  w-full flex overflow-scroll  overflow-x-scroll snap-x snap-mandatory z-30 overflow-y-hidden">
        {projects.map((project) => (
          <div
            key={project}
            className="w-screen flex-shrink-0  snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 overflow-y-hidden "
          >
            <div className="w-36 h-36 relative ">
              <Image src={Teste} alt="" layout="fill" />
            </div>

            <div>
              <h4 className="">Site aluguél de carros!</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-primary-500/10 h-[500px] absolute top-[30%] left-0 -skew-y-12 "></div>
    </div>
  );
};

export default Projects;
