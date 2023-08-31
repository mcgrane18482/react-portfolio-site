import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import './footer.scss';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer>
			<div className="footer-container">
				<div className="social-icons">
					<a className="footer-icon" href="https://github.com/mcgrane18482" target="_blank">
						<FontAwesomeIcon icon={faGithub} size="2x" />
					</a>
					<a className="footer-icon" href="https://www.linkedin.com/in/c-erinmcgrane/" target="_blank">
						<FontAwesomeIcon icon={faLinkedin} size="2x" />
					</a>
				</div>
				<div className="footer-nav">
					<ul className="">
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
				</div>
				<div className="footer-bottom">
					<p>Copyright &copy; {year} McGrane.dev</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;