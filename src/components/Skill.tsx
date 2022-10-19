import Image from "next/image";
import React from "react";

interface ISkill {
  image: string;
  alt: string;
}

const Skill: React.FC<ISkill> = ({ image, alt }) => {
  return (
    <div className="w-[60px] h-[60px] relative hover:scale-125 duration-300">
      <Image src={image} alt={alt} layout="fill" />
    </div>
  );
};

export default Skill;
