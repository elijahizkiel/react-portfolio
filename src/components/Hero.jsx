/**
 * Hero component that serves as the introductory section of the portfolio.
 * It includes a brief description of the developer and a button to navigate
 * to the "Projects" section of the page.
 *
 * @component
 * @returns {JSX.Element} The Hero component.
 *
 * @example
 *  Usage in a React application
 * import Hero from './Hero';
 * 
 * function App() {
 *   return (
 *     <div>
 *       <Hero />
 *     </div>
 *   );
 * }
 */
import { Link } from "react-scroll";
import Button from "./Button";

export default function Hero() {
  return (
    <div id="home"  className="hero">
      <div className="I-am">I'm a</div>
      <p>
        Front-end Website Developer
        </p>
      <Link to="projects" smooth={true} duration={500} >
      <Button className="btn btn-primary">Projects</Button>
      </Link>
    </div>
  );
}
