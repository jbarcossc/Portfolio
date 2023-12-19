import React, { Component } from 'react';
import '../styles/Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

class Project extends Component {
    constructor(props) {
        super(props);
        library.add(fab);
    };
    render() {
        const imageUrl = process.env.PUBLIC_URL + '/images/' + this.props.image;
        return (
            <a id={this.props.id} className="project-tile" href={this.props.href} target='_blank' rel="noreferrer">
                <div id="project-stack">
                    {Object.values(this.props.stack).map(element => (
                        <FontAwesomeIcon icon={['fab',element]} className="tech-icon" key={element}/>
                    ))}
                </div>
                <div className='project-info'>
                    <div className="project-image">
                        <img src={imageUrl} alt={this.props.title + " project"} />
                    </div>
                    <div className="project-link">
                        <span className="project-link-detail">&lt;</span>{this.props.title}<span className="project-link-detail">/&gt;</span>
                    </div>
                </div>
            </a>
        );
    }
}

export default Project;