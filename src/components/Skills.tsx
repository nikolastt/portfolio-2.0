import React from "react";
import Skill from "./Skill";

const Skills: React.FC = () => {
  const skils = [
    {
      name: "css",
      src: "/images/css.svg",
    },
    {
      name: "html",
      src: "/images/html.svg",
    },
    {
      name: "javascript",
      src: "/images/javascript.svg",
    },
    {
      name: "nextJS",
      src: "/images/next.svg",
    },
    {
      name: "tailwind",
      src: "/images/tailwind.svg",
    },
    {
      name: "node",
      src: "/images/node.svg",
    },
    {
      name: "git",
      src: "/images/git.svg",
    },
    {
      name: "react",
      src: "/images/react.svg",
    },
    {
      name: "typescript",
      src: "/images/typescript.svg",
    },
  ];

  return (
    <div className="h-screen relative flex flex-col text-center justify-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-primary-800  ">
        Skills
      </h3>

      <div className="grid grid-cols-3 gap-9">
        {skils.map((skill) => (
          <Skill key={skill.name} image={skill.src} alt={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
