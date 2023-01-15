import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Catalina Olarte</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Header */}
        <Header />
        {/* Home */}
        <section id="home" className="snap-start">
          <Hero />
        </section>
        {/* About me */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Skills */}
        <section id="skills" className="snap-center">
          <Skills />
        </section>
        {/* Projects */}
        <section id="projects" className="snap-center">
          <Projects />
        </section>
        {/* Contect */}
        <section id="contact" className="snap-center">
          <Contact />
        </section>
        {/* Footer */}
      </main>
    </>
  );
}
