import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Template from "../components/Template";
import WorkExperience from "../components/WorkExperience";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  return (
    <Template>
      <Head>
        <title>Dacy Portfolio</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About me*/}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-center ">
        <ContactMe />
      </section>
      <footer className="sticky bottom-5 w-full">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <ArrowUpIcon fontSize={16} width={24} height={24} color=""/>
          </Link>
        </div>
      </footer>
    </Template>
  );
};

export default Home;
