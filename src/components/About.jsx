import React from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import { TypeAnimation } from "react-type-animation";

const About = ({ img }) => {
  return (
    <section className="about" id="about">
      <img className="about-img" src={img} />
      <div className="description">
        <h2>About Me</h2>
        <TypeAnimation
          className="par"
          sequence={[`Hi, I'm Elias Hizkiel! I am a passionate developer with experience in
          building web applications using modern technologies like React, Flask,
          and more. I love to learn and explore new technologies and
          continuously improve my skills.`, 1000, " "]}
          speed={75}
          repeat={Infinity}
          deletionSpeed={50}
        />
        <Link to="contact" smooth={true} duration={500}>
          <Button className={"btn btn-primary"}>Contact Me</Button>
        </Link>
        <Button className={"btn btn-secondary"}>Resume</Button>
      </div>
    </section>
  );
};

export default About;
