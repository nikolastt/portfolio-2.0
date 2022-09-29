import React from "react";
import Skill from "./Skill";

const Skills: React.FC = () => {
  return (
    <div className="h-screen relative flex flex-col text-center justify-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-primary-800  ">
        Skills
      </h3>

      <div className="grid grid-cols-3 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
};

export default Skills;
