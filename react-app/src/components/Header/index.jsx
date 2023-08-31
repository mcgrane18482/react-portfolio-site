import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = async e => {
        setMenuOpen(!menuOpen);
    };

    return (

        <nav className="header-content">
            <NavLink to="/" className="logo">E. MCGRANE</NavLink>

            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/about">ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">PORTFOLIO</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                </li>

            </ul>

            <div id="mobile">
                <FontAwesomeIcon id="menu-icon" onClick={toggleMenu} icon={menuOpen ? faTimes : faBars} size="2x" />
            </div>

        </nav>

    )
}
export default Header;
