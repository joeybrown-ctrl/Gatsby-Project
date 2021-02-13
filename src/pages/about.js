import React from 'react';
import { Link } from 'gatsby';

import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div>
            <h1>This is the About Page</h1>
            <p>My name is Joey and I am a full-stack web developer. I have a professional certification through the University of Arizona. My programming skills include JavaScript, Node.js and React. I also have experience with MySQL and NoSQL database structures and ORMs, test-driven development, agile working environments and the development lifecycle. When I'm not coding, I am playing with my boisterous cat, Tank and enjoying Southern Arizona's sunny weather.</p>
            <p>Curious about my work? Check out my work on <a target="_blank" rel="noreferrer" href="https://github.com/joeybrown-ctrl">GitHub</a>.</p>
            <p>Want to work with me? Contact me <Link to="/contact">here</Link>.</p>
            <Footer />
        </div>
    )
}

export default AboutPage;