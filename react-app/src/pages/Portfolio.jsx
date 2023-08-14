import { useState } from 'react';

import Project from '../components/Project';
import projectData from '../assets/projects.json'

function Portfolio() {

    return (
        <section className="second-section">
            <div className="accent-title">PROJECTS</div>
            <div className="contact-page-title">I am continuously developing my skills and expanding my knowledge through my projects. Take a look at what I've been working on lately!</div>

            <div className="project-section">
                {projectData.map((proj, i) => {
                    return <Project key={i} image={proj.image} title={proj.title} description={proj.description} link={proj.link} deployed_link={proj.deployed_link} />
                })}
            </div>
        </section>
    )
}

export default Portfolio;