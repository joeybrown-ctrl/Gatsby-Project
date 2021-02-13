import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
            <h3>The Great Gatsby Experiment</h3>
            <h5><Link to="/about">About</Link></h5>
            <h5><Link to="/blog">Blog</Link></h5>
            <h5><Link to="/contact">Contact</Link></h5>
            <h5><Link to="/">Home</Link></h5>
        </header>
    )
}

export default Header;