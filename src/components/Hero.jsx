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
