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

const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "I create beautiful, responsive and user-friendly websites that meet the needs of your business.",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "I develop custom websites that are fast, secure, and easy to manage.",
  },
  {
    id: 3,
    title: "Mobile Apps",
    description:
      "I develop mobile applications that are fast, responsive, and user-friendly.",
  },
];
const projects = [
  {
    id: 1,
    title: "Keeper App",
    description: "Dynamic web app created with React that helps users to take note and modify and delete it when needed.",
    image: assets.keeperApp,
    link: "https://keeper-app-iota-six.vercel.app/",
  },
  {
    id: 2,
    title: "Arrhythmias Predictor",
    description: "Developed a full-stack web app using React.js and Flask to predict arrhythmias based on ECG data. Implemented user authentication in the backend and contributed to front-end UI enhancements. Collaborated using GitHub and Agile sprints.",
    image: assets.arrhythmiaPredictor,
    link:""
  },
  {
    id: 3,
    title: "Mortgage Repayment Calculator",
    description: "Created a dynamic calculator using React to help users estimate mortgage payments, implementing real-time input handling.",    
    image: assets.mortgageCalc,
    link: "https://mortgage-repayment-calculator-taupe.vercel.app/"
  },
];
const links = [
  {
    id: 1,
    text: "Home",
    url: "home",
  },
  {
    id: 2,
    text: "About",
    url: "about",
  },
  {
    id: 3,
    text: "Services",
    url: "services",
  },
  {
    id: 4,
    text: "Projects",
    url: "projects",
  },
];
function App() {
  return (
    <div className="app">
      <Header logo={assets.logo} links={links} />
      <main>
        <Hero />
        <About img={assets.aboutImg} />
        <Services services={services} />
        <Projects projects={projects} />
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
