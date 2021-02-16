import React from 'react';
import { Link } from 'gatsby';

//headerStyles contains all the properties from the stylesheet
import headerStyles from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <h3>The Great Gatsby Experiment</h3>
            <nav>
                <ul>
                    <li>
                        <Link className={headerStyles.link} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link}  to="/about">About</Link></li>
                    <li>
                        <Link className={headerStyles.link}  to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link}  to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header;