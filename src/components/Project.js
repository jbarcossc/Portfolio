import React, { Component } from 'react';
import '../styles/Project.css';
import { ICONS } from '../icons';

class Project extends Component {
	render() {
		const imageUrl =
			process.env.PUBLIC_URL + '/images/' + this.props.image;
		return (
			<a
				id={this.props.id}
				className="project-tile"
				href={this.props.href}
				target="_blank"
				rel="noreferrer">
				<div id="project-stack">
					{Object.values(this.props.stack).map((element, index) => (
						<svg
							key={`${element.iconName}-${element.id}-${index}`}
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<title>{element.iconName}</title>
							<path d={ICONS[element.iconName]} />
						</svg>
					))}
				</div>
				<div className="project-info">
					<div className="project-image">
						<img
							src={imageUrl}
							alt={this.props.title + ' project'}
						/>
					</div>
					<div className="project-link">
						<span className="project-link-detail">&lt;</span>
						{this.props.title}
						<span className="project-link-detail">/&gt;</span>
					</div>
				</div>
			</a>
		);
	}
}

export default Project;
