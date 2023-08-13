import { useState } from 'react';

import Project from '../components/Project';
import projectData from '../assets/projects.json'

function AllProjects() {
    // const [project, setProject] = useState([
    //     {
    //         title: 'MixMate',
    //         description: 'Full-stack application for finding cocktail recipes and sharing users drink creations',
    //         link: 'https://github.com/mcgrane18482/social_network_api'
    //     },
    //     {
    //         title: 'MERN Blog App',
    //         description: 'MERN stack app where users can post thoughts and see other\'s posts',
    //         link: 'https://github.com/mcgrane18482/MERN_blog_app'
    //     },
    //     {
    //         title: 'Social Network API',
    //         description: 'Back-end code for a social media network with CRUD functionality for users and posts. Built with node.js, mongodb, and mongoose',
    //         link: 'https://github.com/mcgrane18482/social_network_api'
    //     },
    // ]);

    return (
        <section className="second-section">
            <div className="accent-title">PROJECTS</div>

            {projectData.map((proj, i) => {
                return <Project key={i} title={proj.title} description={proj.description} link={proj.link} />
            })}
        </section>
    )
}

export default AllProjects;