import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utils/ScrollService";

import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/doctor-amherstia-s/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/amherstiadoctor">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Amherstia</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={["BS Computer Science", 1000, "Web Developer", 1000]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            Knack of building applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>Contact Me</button>
            <a href="Doctor-Amherstia-Resume.pdf" download="Doctor-Amherstia-Resume.pdf">
              <button className="btn highlighted-btn">Resumé</button>
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
