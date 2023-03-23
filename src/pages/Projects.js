import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css';
import { projectList } from '../utils/ProjectList';

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} skills={project.skills} />
        })}
      </div>
    </div>
  )
}

export default Projects