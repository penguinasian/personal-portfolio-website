import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProjectItem.css';

function ProjectItem( {image, skills, name, id}) {

    const navigate = useNavigate()

  return (
    <div className="projectItem" onClick={() => navigate('/project/' + id)}>
        {/* <div style={{backgroundImage: `url(${image})`}} className="bgImage">
            
        </div> */}
        <div className="individualProjectCard">
          <h2>App name: {name}</h2>
          <p>Skills used: {skills} </p>
          <button class="detailsBtn" onClick={() => navigate('/project/' + id)}>Details</button>
        </div>
       
    </div>
  )
}

export default ProjectItem