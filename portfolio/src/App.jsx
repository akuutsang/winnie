import "./app.scss";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
