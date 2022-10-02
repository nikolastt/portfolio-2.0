import React from "react";

// import { Container } from './styles';

const ContactMe: React.FC = () => {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-primary-800 text-2xl">
        Contact
      </h3>
    </div>
  );
};

export default ContactMe;
