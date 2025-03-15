import assets from "./assets/assets";
import Experience from "./components/Experience";

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
    description:
      "Dynamic web app created with React that helps users to take note and modify and delete it when needed.",
    image: assets.keeperApp,
    link: "https://keeper-app-iota-six.vercel.app/",
  },
  {
    id: 2,
    title: "Arrhythmias Predictor",
    description:
      "Developed a full-stack web app using React.js and Flask to predict arrhythmias based on ECG data. Implemented user authentication in the backend and contributed to front-end UI enhancements. Collaborated using GitHub and Agile sprints.",
    image: assets.arrhythmiaPredictor,
    link: "",
  },
  {
    id: 3,
    title: "Mortgage Repayment Calculator",
    description:
      "Created a dynamic calculator using React to help users estimate mortgage payments, implementing real-time input handling.",
    image: assets.mortgageCalc,
    link: "https://mortgage-repayment-calculator-taupe.vercel.app/",
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
  {
    id:5,
    text:"Experience",
    url:"experiences"
  },
];
const experiences = [
  {
    id: 1,
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    name: "HTML5",
  },
  {
    id: 2,
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    name: "CSS",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "React.Js",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    id: 5,
    name: "NodeJs",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 6,
    name: "Python",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    id: 7,
    name: "Flask",
    img: assets.flask,
  },
  {
    id: 8,
    name: "Java",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    id: 9,
    name: "PostgreSQL",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  },
];
export { experiences, links, projects, services };
