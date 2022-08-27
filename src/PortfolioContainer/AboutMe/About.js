import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about">
      <div className="about-container">
        <h1>About Me</h1>
        <h3>Why Choose Me?</h3>
        <div className="card">
          <p>
            Full Stack Developer with background knowledge of multiple
            programming languages and hands on a live project. Along with that
            developed multiple projects with utmost efficiency. I have also
            worked tirelessly on my communication abilities and teamwork skills.
            I have the experience and the attitude to excel. If given a chance,
            I will surely work towards building my expertise, which would prove
            beneficial for me as well as your organization.
          </p>
          <h3>Here are a Few Highlights</h3>
          <ul className="few-highlights">
            <li>Worked on a live Project</li>
            <li>Worked as a freelancer</li>
            <li>Worked on Client Issues</li>
            <li>Building REST API</li>
            <li>Developed Multiple projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
