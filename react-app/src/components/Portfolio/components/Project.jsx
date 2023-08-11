
function Project({ title, description, link, image }) {
    return (
        <div className="project">
            <div className="project-container">
                <div className="project-image">
                    <img src={image} alt="" />
                </div>
                <div className="project-title">{title}</div>
                <div className="project-description">{description}</div>
                <div className="project-link">
                    <a href={link}>View on Github</a>
                </div>
            </div>
        </div>
    )
}

export default Project;