import React, { Component } from 'react';
import '../styles/Project.css';

class Project extends Component {
    render() {
        const imageUrl = process.env.PUBLIC_URL + '/images/' + this.props.image;

        return (
            <a id={this.props.id} className="project-tile" href={this.props.href} target='_blank' rel="noreferrer">
                <div className="project-image">
                    <img src={imageUrl} alt={this.props.title + " project"} />
                </div>
                <div className="project-link">
                    <span className="project-link-detail">&lt;</span>{this.props.title}<span className="project-link-detail">/&gt;</span>
                </div>
            </a>
        );
    }
}

export default Project;