import './skills.scss';

export default function Skills() {
    return (
        <section className="first-section">
            <div className="">
                <p className="accent-title">SKILLS</p>
                <h2 className="main-title">My tech stack</h2>
            </div>

            <div className="">
                <div className="skills-wrapper">

                    <div className="skill-container">
                        <img className="skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS icon" />
                        <p class="skill-label">JavaScript</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML icon" />
                        <p class="skill-label">HTML</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS icon" />
                        <p class="skill-label">CSS</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React icon" />
                        <p class="skill-label">React</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="React icon" />
                        <p class="skill-label">Express</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js icon" />
                        <p class="skill-label">Node.js</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB icon" />
                        <p class="skill-label">MongoDB</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL icon" />
                        <p class="skill-label">MySQL</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="Git icon" />
                        <p class="skill-label">Git</p>
                    </div>

                </div>
            </div>
        </section>
    )
}