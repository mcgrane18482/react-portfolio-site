import { NavLink } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer>
			<div className="footer-content">
				<nav className="footer-nav">

					<NavLink to="/">Home</NavLink>

					<NavLink to="/about">About</NavLink>

					<NavLink to="/contact">Contact</NavLink>

				</nav>
				<p className="text-center">&copy; {year} McGrane.dev</p>
			</div>
		</footer>
	);
};

export default Footer;