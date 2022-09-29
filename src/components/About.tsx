import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import MyImageSunrise from "../../public/images/MyImageSunrise.jpg";

const About: React.FC = () => {
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
      className="h-screen flex flex-col max-w-7xl relative text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="relative top-9 uppercase tracking-[20px] text-2xl text-primary-800">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: false }}
        className="w-56 h-56 relative flex-shrink-0  md:mb-0 md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          src={MyImageSunrise}
          alt="My Photo"
          layout="fill"
          className="object-cover rounded-full  -scale-x-[1] md:rounded-lg "
        />
      </motion.div>

      <div className="px-0 md:px-10 space-y-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-primary-500">little</span>{" "}
          background
        </h4>

        <p className="text-sm ">
          Lorem ipsum dolor sit, amet consetetur adipisicing elit. Quas ratione
          eos explicabo expedita nesciunt ipsam accusantium tempora. Vel
          sapiente accusantium necessitatibus autem, odio aliquid voluptatibus
          voluptates doloremque deserunt nostrum et! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vitae, minima? Animi iusto corporis
          officiis tempore quibusdam ut incidunt suscipit doloremque omnis dolor
          eos repellat aspernatur, at deserunt accusamus maiores nam. Illo
          provident dolorum iusto natus voluptatibus ipsum, minus saepe incidunt
          sed accusamus quam sunt error laboriosam omnis cumque, molestiae nemo.
          Molestias amet esse molestiae. Alias voluptates maiores corrupti id
          accusantium. Corrupti eius, voluptas enim iure, laboriosam voluptate
          praesentium aperiam commodi vitae asperiores at.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
