import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetails.css';
import { projectList } from '../utils/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';

function ProjectDetails() {
    const { id } = useParams()
    const project = projectList[id]
    
    return (
        <div className="project">
            <h1> {project.name} </h1>
            <img src={project.image} />
            <p>
                <b>Technologies Used:</b> {project.skills}
            </p>
            <p className="small">Click below icon to checkout Github repository for this project</p>
            <a href={project.url} target="_blank" rel="noreferrer"><GitHubIcon /></a>
        </div>
    )
}

export default ProjectDetails