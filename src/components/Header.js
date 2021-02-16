import React from 'react';
import { Link } from 'gatsby';

//headerStyles contains all the properties from the stylesheet
import headerStyles from './Header.module.scss';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h3>
                <Link className={headerStyles.title} to="/">
                The Great Gatsby Experiment
                </Link>
            </h3>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}  to="/about">About</Link></li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem}activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header;