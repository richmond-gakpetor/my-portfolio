import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Certs from "./components/Certs";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ProfessionalWork from "./components/ProfessionalWork";

function App() {
  useEffect(() => {
    document.title = "Richmond Gakpetor";
    AOS.init();
  }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Hero />
      <Skills />
      {/* <ProfessionalWork /> */}
      <Projects />
      <Certs />
      <Footer />
    </div>
  );
}

export default App;
