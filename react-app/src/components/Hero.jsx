import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import PFP from '../assets/images/pfp-square.png'

const Hero = () => {
    return (
        <section className="first-section">
            <div className="left-half">
                <img id="profile-pic" src={PFP} alt="Picture of Erin" />
            </div>
            <div className="right-half">
                <div className="accent-title">Hi there! I'm</div>
                <div className="hero-title">Erin McGrane, a web developer with a background in design</div>

                <div className="main-subtitle"> I am a Graphic Designer turned User Experience Designer turned Programmer! My passion is to bridge the gap between programming development and UX/UI design. I am on a journey to break into tech and I am ready to join your team as a web developer!</div>
                {/* <img id="hero-picture" src={heroPicture} alt="Image of a desktop work space"></img> */}
                <div className="social">
                    <div className="accent-title">Let's connect:</div>
                    <div className="row">

                        <a className="icon" href="https://github.com/mcgrane18482" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="2x" />

                        </a>
                        <a className="icon" href="https://www.linkedin.com/in/c-erinmcgrane/" target="_blank" >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />

                        </a>

                    </div>

                </div>
            </div>


        </section >
    )
}

export default Hero;