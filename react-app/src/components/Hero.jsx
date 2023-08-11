import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    return (
        <section className="first-section">
            <div className="left-half">
                <div className="first-section-title">Hi! I'm Erin McGrane, a web developer with a background in design.</div>
                <div className="first-section-subtitle"> I'm a web developer with a background in design. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum eaque aspernatur, non corrupti
                    veniam fugit quo provident, et praesentium eius labore ex cum inventore magni nam soluta tempora!
                    Laudantium!</div>
            </div>

            <div className="right-half">
                <img id="my-picture" src="https://placehold.co/300x200" alt="Logo" />
            </div>



            <div className="social">
                <div className="row">

                    <a href="https://github.com/mcgrane18482" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />

                    </a>
                    <a href="https://www.linkedin.com/in/c-erinmcgrane/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />

                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;