import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';


const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>My name is George Joseph Brown, but you can call me Joey! I am a full-stack web developer with a passion for the continual learning process that programming requires. I am professionally certified through the University of Arizona. My programming skills include JavaScript, Node.js and React. I also have experience with MySQL/NoSQL, ORMs, test-driven development, agile working environments and the development lifecycle. When I'm not coding, I am playing with my boisterous cat and enjoying Southern Arizona's sunny weather.</p>
            <p>Curious about my work? Check out my <a target="_blank" rel="noreferrer" href="https://github.com/joeybrown-ctrl">GitHub</a>.</p>
            <p>Want to work with me? Contact me <Link to="/contact">here</Link>.</p>
        </Layout>
    )
}

export default AboutPage;