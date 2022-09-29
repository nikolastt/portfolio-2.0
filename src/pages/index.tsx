import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="bg-secondary-500 h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Nikolas Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-start">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contacte Me */}
    </div>
  );
};

export default Home;
