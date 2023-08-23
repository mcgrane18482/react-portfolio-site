import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [menuIcon, setMenuIcon] = useState(false);

    const toggleMenu = async e => {
        setMenuIcon(!menuIcon);
    };

    return (
        <header>
            <div className="header-content">
                <div className="logo">E. MCGRANE</div>


                <nav className="navbar">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                    <NavLink to="/portfolio">PORTFOLIO</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>

                </nav>

                <div id="mobile">
                    <FontAwesomeIcon id="menu-icon" onClick={toggleMenu} icon={menuIcon ? faTimes : faBars} />
                </div>

            </div>
        </header>
    )
}
export default Header;
