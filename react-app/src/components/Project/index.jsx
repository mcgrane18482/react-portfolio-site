import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './project.scss';

function Project({ title, description, link, image, deployed_link }) {
    return (

        <div className="grid-item">
            <div className="card">
                <img className="card-image" src={image} />
                <div className="card-content">
                    <div className="project-title">{title}</div>
                    <div className="project-description">{description}</div>
                    <div className="project-link">
                        <a href={link}>
                            <FontAwesomeIcon icon={faLink} /> View on Github
                        </a>
                    </div>
                    {deployed_link && (
                        <div className="project-link">
                            <a href={deployed_link}>
                                <FontAwesomeIcon icon={faLink} /> Visit Live Site
                            </a>
                        </div>
                    )}
                </div>
            </div>

        </div>

    )
}

export default Project;