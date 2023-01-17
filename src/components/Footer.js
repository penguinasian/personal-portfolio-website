import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">

        <a href="https://github.com/penguinasian/" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>

        <a href="https://www.linkedin.com/in/daniel-zhang-12a23a114/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <InstagramIcon />
      </div>
      <p> &copy; 2023 daniel.com </p>
    </div>
  )
}

export default Footer