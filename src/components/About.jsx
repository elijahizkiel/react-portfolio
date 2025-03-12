import React from 'react';
import { Link } from 'react-scroll';
import Button from './Button';

const About = ({img}) => {
    return (
        <section id="about">
            <img className='about-img' src={img} />
            <div className='about-description'>
            <h2 >About Me</h2>
            <p>
                Hi, I'm Elias Hizkiel! I am a passionate developer with experience 
                in building web applications using modern technologies like React, 
                Flask, and more. I love to learn and explore new technologies and
                 continuously improve my skills.
            </p>
            <Link to="contact" smooth={true} duration={500}>
                <Button>Contact Me</Button>
            </Link>
            {/*don't forget to add Resume button to download resume pdf file */}
            </div>
        </section>
    );
};

export default About;