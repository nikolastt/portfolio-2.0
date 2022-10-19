import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// import { Container } from './styles';

import { AiOutlineWhatsApp, AiFillMail } from "react-icons/ai";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:nikolasbitencourtt@gmail.com?subject=${formData.subject}&body=Olá, meu nome é ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-primary-800 text-2xl">
        Contact
      </h3>

      <div className="space-y-6">
        <h4 className="text-4xl font-semibold text-center">
          <span className="decoration-primary-500 underline">Lets Talk</span>
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <AiOutlineWhatsApp size={35} className="animate-pulse" />
            <p className="text-xl">+55 (31) 97307-4108</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <AiFillMail size={35} className="animate-pulse" />
            <p className="text-xl">nikolasbitencourtt@gmail.com</p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-full mx-auto pt-6 "
      >
        <div className="flex space-x-2 w-full">
          <input
            {...register("name")}
            placeholder="Name"
            className="w-1/2 contactInput"
            type="text"
          />{" "}
          <input
            {...register("email")}
            placeholder="E-mail"
            className="w-1/2 contactInput"
            type="text"
          />
        </div>

        <input
          {...register("subject")}
          type="text"
          placeholder="Subject"
          className="contactInput"
        />

        <textarea
          {...register("message")}
          placeholder="Mensagem"
          className="contactInput"
        ></textarea>
        <button
          type="submit"
          className="bg-primary-500 py-5 px-10 rounded-md text-text font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
