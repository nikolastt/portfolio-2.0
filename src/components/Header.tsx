import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import Link from "next/link";

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
        className="flex items-center space-x-5"
      >
        <Link href="https://www.linkedin.com/in/nikolas-bitencourt/" passHref>
          <a target="_blank" rel="noreferrer">
            <AiOutlineLinkedin size={35} />
          </a>
        </Link>

        <Link href="https://github.com/nikolastt" passHref target={"_blank"}>
          <a target="_blank" rel="noreferrer">
            <AiOutlineGithub size={35} />
          </a>
        </Link>

        <Link
          href="https://www.instagram.com/nikolasbitencourt/"
          passHref
          target={"_blank"}
        >
          <a target="_blank" rel="noreferrer">
            <AiOutlineInstagram size={35} />
          </a>
        </Link>
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
