import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Home.css';

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
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, VueJS, HTML, CSS, Bootstrap, TaiwindCSS, NPM, Android Native
            </span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span>
              NodeJS, ExpressJS, Postgresql, MongoDB, DynamoDB, AWS S3, SQL
            </span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span>
              Python, Javascript, Java, C, TypeScript
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home