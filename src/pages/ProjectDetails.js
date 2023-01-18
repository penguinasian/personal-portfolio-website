import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetails.css';
import { projectList } from '../utils/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebSiteLink from '@material-ui/icons/Link';

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
            <p className="small">Click below icons to checkout Github repository and Website for this project</p>
            <div className="websiteLink">
                <a href={project.url} target="_blank" rel="noreferrer"><GitHubIcon /></a>
                <a href={project.websiteUrl} target="_blank" rel="noreferrer"><WebSiteLink /></a>
            </div>

        </div>
    )
}

export default ProjectDetails