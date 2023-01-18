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
            
            <div className="individualProject">
                <div style={{ backgroundImage: `url(${project.image})` }} className="projectDetails">

                </div>
                <a href={project.websiteUrl} target="_blank" rel="noreferrer"><button className="websiteDemoBtn">Demo</button></a>
            </div>
            <p>
                <b>Technologies Used:</b> {project.skills}
            </p>
            <div className="websiteLink">
                <a href={project.url} target="_blank" rel="noreferrer"><GitHubIcon /></a>
                <p className="small">Github link</p>
            </div>

        </div>
    )
}

export default ProjectDetails