import { NavLink } from 'react-router-dom';
import './header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <header>
            <div className="header-content">
                <div className="logo">E. MCGRANE</div>


                <nav>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                    <NavLink to="/portfolio">PORTFOLIO</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>

                </nav>

            </div>
        </header>
    )
}
export default Header;
