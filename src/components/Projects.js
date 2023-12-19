import React, { Component } from 'react';
import '../styles/Projects.css';
import Project from './Project';

class Projects extends Component {
    projects_info = {
        0: { id: "project-survey", image: "survey-form.png", href:"https://mattcoder3.github.io/survey-form/", title: "Survey Form", stack: ["html5","css3-alt","git-alt"]},
        1: { id: "project-game-of-life", image: "game-of-life.png", href:"https://jbarcossc.github.io/gameOfLife/", title: "Game of Life", stack: ["html5","css3-alt","js","git-alt"]},
        2: { id: "project-documentation", image: "documentation-page.png", href:"https://mattcoder3.github.io/technical-documentation-page/", title: "Documentation Page", stack: ["html5","css3-alt","git-alt"]},
        3: { id: "project-landing", image: "landing-page.png", href:"https://mattcoder3.github.io/landing-page/", title: "Landing Page", stack: ["html5","css3-alt","git-alt"]}
    };

    render(){
        return (
            <section id="projects">
                <div id="projects-projects">
                    {Object.values(this.projects_info).map(element => (
                            <Project key={element.id} id={element.id} image={element.image} href={element.href} title={element.title} stack={element.stack}/>
                    ))}
                </div>
                <div id="profile-link-container">
                    <a id="profile-link" target="_blank" rel="noreferrer" href="https://github.com/mattcoder3">Show all</a>
                </div>
            </section>
        )
    }
}

export default Projects;