import { useState } from 'react';

import mixMateImg from '../assets/images/mixmate-img.png';
import GVFImg from '../assets/images/good-vibes-feed.png';
import socialNetwork from '../assets/images/social-network.png';
import Project from '../components/Project';

function Portfolio() {

    return (
        <section className="second-section">
            <div className="accent-title">PROJECTS</div>
            <div className="main-title">What I've built</div>
            <p className="portfolio-page-subtitle">I am continuously developing my skills and expanding my knowledge through my projects. Take a look at what I've been working on lately!</p>

            <div className="project-section">

                <Project image={mixMateImg}
                    title="MixMate"
                    description="1 week-long group project built using Node, Express, Sequelize, Handlebars"
                    link="https://github.com/ThomasSzentirmay/MixMate-App"
                    deployed_link="https://mixmatecocktails-1b7d39db7409.herokuapp.com/"
                />
                <Project image={GVFImg}
                    title="Good Vibes Feed"
                    description="Built using Node, Express, MongoDB, React"
                    link="https://github.com/mcgrane18482/good_vibes_feed"
                    deployed_link="https://good-vibes-feed-0f727cb91a84.herokuapp.com/"
                />
                <Project image={socialNetwork}
                    title="Soial Network API"
                    description="Back-end project built with Node, MongoDB, Mongoose"
                    link="https://github.com/mcgrane18482/social_network_api"
                />

            </div>
            <div >
                <a className="action-btn" href="https://github.com/mcgrane18482" target="_blank">View More on GitHub</a>
            </div>
        </section>
    )
}

export default Portfolio;