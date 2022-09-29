import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 flex justify-between max-w-7xl mx-auto z-20 p-5 items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center"
      >
        <SocialIcon url="https://www.instagram.com/nikolasbitencourt/" />
        <SocialIcon url="https://www.instagram.com/nikolasbitencourt/" />
        <SocialIcon url="https://www.instagram.com/nikolasbitencourt/" />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center cursor-pointer"
      >
        <SocialIcon className="cursor-pointer" network="email" />
        <p className="uppercase text-sm text-gray-400 hidden md:inline-flex">
          Get In touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
