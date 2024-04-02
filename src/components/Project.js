import React, { Component } from 'react';
import '../styles/Project.css';
import { AiFillAccountBook } from "react-icons/ai";

const DynamicIcon = ({ iconName }) => {
  const Icon = React.lazy(() => import(`react-icons/${iconName}`));

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Icon />
    </React.Suspense>
  );
};

class Project extends Component {
    render() {
        const imageUrl = process.env.PUBLIC_URL + '/images/' + this.props.image;
        return (
            <a id={this.props.id} className="project-tile" href={this.props.href} target='_blank' rel="noreferrer">
                <div id="project-stack">
                    {Object.values(this.props.stack).map(element => (
                        <DynamicIcon iconName={element} />
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