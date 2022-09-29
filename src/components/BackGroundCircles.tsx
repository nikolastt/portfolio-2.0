import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center mt-36">
      <motion.div
        initial={{
          scale: 0,
          y: -200,
        }}
        animate={{
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="border border-secondary-300 w-[200px] h-[200px] rounded-full mt-52 absolute animate-ping "
      />
      <motion.div
        initial={{
          scale: 0,
          x: -200,
        }}
        animate={{
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 1.7,
        }}
        className="border border-secondary-300 w-[300px] h-[300px] rounded-full mt-52 absolute "
      />
      <motion.div
        initial={{
          scale: 0,
          y: 200,
        }}
        animate={{
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.9,
        }}
        className="border border-secondary-300 w-[500px] h-[500px] rounded-full mt-52 absolute "
      />
      <motion.div
        initial={{
          scale: 0,
          x: 200,
        }}
        animate={{
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 2.1,
        }}
        className="border border-primary-500 w-[650px] h-[650px] rounded-full mt-52 absolute animate-pulse"
      />
      <motion.div
        initial={{
          scale: 0,
          x: 10,
        }}
        animate={{
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 2.1,
        }}
        className="border border-secondary-300 w-[800px] h-[800px] rounded-full mt-52 absolute "
      />
    </div>
  );
};

export default BackgroundCircles;
