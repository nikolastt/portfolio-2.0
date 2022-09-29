import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackGroundCircles";

import MyImage from "../../public/images/MyImage.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const [text, count] = useTypewriter({
    words: [
      "HI, meu nome é Nikolas Bitencourt",
      "loves-coffee.tsx",
      "<AndLovesToCode />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-8 ">
      <BackgroundCircles />

      <div className="w-32 h-32 relative rounded-full mx-auto overflow-hidden object-cover ">
        <Image
          src={MyImage}
          alt="My photo"
          layout="fill"
          className="scale-[1.8] -translate-x-2 "
        />
      </div>

      <div className="z-20">
        <h2 className="uppercase text-primary-800 pb-2 tracking-[15px] ">
          Software Enginer
        </h2>

        <h1 className="text-4xl lg:text-6xl font font-semibold px-10 ">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#2AFA93" />
        </h1>

        <div className="pt-6">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experienses">
            <button className="heroButton">Experiências</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
