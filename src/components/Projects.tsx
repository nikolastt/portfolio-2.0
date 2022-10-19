import Image from "next/image";
import React from "react";
import Teste from "../../public/images/MyImage.jpg";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      name: "Compra de tickets para evento",
      image: "/images/geaanLeitePhoto1.png",
      description:
        "Este site foi desenvolvido para a realização de vendas de ingressos para um evento, o software conta com as funcionalidades de login, compra de ingressos via PIX. clique para mais detalhes... ",
    },
    {
      name: "Aluguel de veículos",
      image: "/images/rentalCarPhoto1.png",
      description:
        "Este projeto foi desenvolvido para trabalho da faculdade, é um site onde aluga-se veículos. Era requisito do trrabalho um aplicativo onde realizava consultas em um banco de dados e exibia relatórios.",
    },
  ];

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
        Projetos
      </h3>

      <div className="relative  w-full flex overflow-x-scroll snap-x snap-mandatory z-20 overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary-500">
        {projects.map((project) => (
          <div
            key={project.name}
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
              className="w-64 h-36 relative rounded-xl overflow-hidden"
            >
              <Image src={project.image} alt="" layout="fill" />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl text-center font-semibold ">
                {project.name}
              </h4>

              <h6 className="text-center text-sm px-6 lg:text-lg">
                {project.description}
              </h6>
            </div>

            <div className="w-full flex justify-center">
              <button className="w-2/3 md:w-1/3 py-2 bg-primary-500 rounded-full mt-3">
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-primary-500/10 h-[500px] absolute top-[30%] left-0 -skew-y-12 "></div>
    </motion.div>
  );
};

export default Projects;
