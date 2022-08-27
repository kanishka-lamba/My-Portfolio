import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="nav-container">
            <ul className="nav">
              <li className="navList">
                <a href="#home" className="navItem">
                  Home
                </a>
              </li>
              <li className="navList">
                <a href="#about" className="navItem">
                  About Me
                </a>
              </li>
              <li className="navList">
                <a href="#projects" className="navItem">
                  Projects
                </a>
              </li>
              <li className="navList">
                <a href="#contact" className="navItem">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <div className="colz" id="home">
            <div className="colz-icon">
              <a href="/">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="/">
                <i className="fab fa-google-plus-square"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-youtube-square"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Kanishka</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "MEAN Stack Dev",
                    1000,
                    "React Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and backend
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="Kanishka_Lamba_Resume.pdf"
              download="kanishka_lamba_resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
