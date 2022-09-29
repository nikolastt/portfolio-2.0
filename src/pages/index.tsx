import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";

import Header from "../components/Header";
import Hero from "../components/Hero";

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
      <section id="section" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contacte Me */}
    </div>
  );
};

export default Home;
