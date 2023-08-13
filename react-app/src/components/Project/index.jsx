import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
// import '../components/styles/project.scss';

function Project({ title, description, link, image }) {
    return (
        <div className="project-section">
            <div className="project-card">
                <div className="project-image">
                    <img src={image} alt="" />
                </div>
                <div className="smallest-title">{title}</div>
                <div className="project-description">{description}</div>
                <div className="project-link">
                    <a href={link}>
                        <FontAwesomeIcon icon={faLink} /> View on Github
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;