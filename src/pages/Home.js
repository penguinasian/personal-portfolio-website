import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Home.css';
import profileImg from '../assets/me.jpg';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="profile">
          <img src={profileImg} alt="profile" />

          <div className="prompt">
            <h2> Hi, my name is Daniel</h2>
            <p> I am a recent graduate of CST program at BCIT. Over the past two years, I have developed skills in web-based applications both on the front-end and back-end using technologies such as React, Vue, Javascript, HTML, CSS, Node, Express, REST API and Python.
              I am looking forward to applying my skills in my future work and learning from the best from the industry!
            </p>
            <a href="https://github.com/penguinasian/" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>

            <a href="https://www.linkedin.com/in/daniel-zhang-12a23a114/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:zhangqiangtianchen@gmail.com">
              <EmailIcon />
            </a>

          </div>
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