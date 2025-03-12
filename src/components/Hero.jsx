import { Link } from "react-scroll";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="hero">
      <span>I'm</span>
      <h1>Front-end focused Full-Stack Developer</h1>
      <Link to="projects" smooth={true} duration={500} >
      <Button className="btn-primary">Projects</Button>
      </Link>
    </div>
  );
}
