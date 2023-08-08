import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
    <header className="row justify-between align-center">
        <h3>Logo</h3>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </header>
    )
}
export default Header;
