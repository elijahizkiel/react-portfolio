import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FormSendMail from "./components/FormSendMail";
import assets from "./assets/assets";

import { serviceId, templateId, publicKey } from "../variables.js";
import { experiences, links, projects, services } from "./resources.js";
import ExperienceCollection from "./components/ExperienceCollection.jsx";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const mql = window.matchMedia("(prefers-color-scheme: dark)")
    mql.addEventListener("change", (event) => {
      setTheme(event.matches);
    });
  return (
    <div className="app">
      <Header
        logo={theme ? assets.logoWhite : assets.logoBlack}
        links={links}
      />
      <main>
        <Hero />
        <About img={assets.aboutImg} />
        <Services services={services} />
        <Projects projects={projects} />
        <ExperienceCollection experiences={experiences} />
        <div className="ellipses">
          <div className="ellipse-left"></div>
          <div className="ellipse-right"></div>
        </div>
        <section className="contacts" id="contact">
          <Contact />
          <FormSendMail
            templateId={templateId}
            publicKey={publicKey}
            serviceId={serviceId}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
