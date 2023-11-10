import "./App.css";
import "./app.scss";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import { Services } from "./components/services/Services";
// import { Test } from "./test";
function App() {
  return (
    <>
      <div>
        <section>
          <Navbar id="Homepage" />
          <Hero />
        </section>
        <section id="Services">
          {" "}
          <Services type="services" />{" "}
        </section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <section id="Resume">Portfolio2</section>
        <section id="Skills">Portfolio3</section>
        <section id="Contact">Contact</section>

        {/* <Test />
        <Test /> */}
      </div>
    </>
  );
}

export default App;
