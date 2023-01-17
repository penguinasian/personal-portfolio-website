import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my Name is Daniel</h2>
        <div className="prompt">
          <p> A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">

      </div>
    </div>
  )
}

export default Home