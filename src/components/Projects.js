import React, { Component } from 'react';
import '../styles/Projects.css';
import Project from './Project';

class Projects extends Component {
	projects_info = {
		0: {
			id: 'project-goles-de-river',
			image: 'goles-de-river.png',
			href: 'https://www.upwork.com/freelancers/~01f73c965c867f046d?p=1713013410095878144',
			title: 'Goles de River',
			stack: ['javascript', 'git'],
		},
		1: {
			id: 'project-game-of-life',
			image: 'game-of-life.png',
			href: 'https://jbarcossc.github.io/gameOfLife/',
			title: 'Game of Life',
			stack: ['html', 'css', 'javascript', 'git'],
		},
		2: {
			id: 'project-rappi-item-finder',
			image: 'rappi-item-finder.png',
			href: 'https://www.youtube.com/watch?v=vsTe8nuCoIY&ab_channel=MattCoder',
			title: 'Rappi Item Finder',
			stack: ['python', 'git'],
		},
		3: {
			id: 'project-flappy-racoon',
			image: 'flappy-racoon.png',
			href: 'https://www.youtube.com/watch?v=E-_UWV7NUFw&t=1s&ab_channel=MattCoder',
			title: 'Flappy Racoon',
			stack: ['html', 'css', 'git'],
		},
	};

	render() {
		return (
			<section id="projects">
				<div id="projects-projects">
					{Object.values(this.projects_info).map((element) => (
						<Project
							key={element.id}
							id={element.id}
							image={element.image}
							href={element.href}
							title={element.title}
							stack={element.stack}
						/>
					))}
				</div>
				<div id="profile-link-container">
					<a
						id="profile-link"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/jbarcossc">
						Show all
					</a>
				</div>
			</section>
		);
	}
}

export default Projects;
