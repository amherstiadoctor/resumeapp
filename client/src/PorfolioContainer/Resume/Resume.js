import React, { useState } from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";

import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
        </div>
        <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
      </div>
    );
  };

  const resumeBullets = [
    {
      label: "Education",
      logoSrc: "education.svg",
    },
    {
      label: "Work History",
      logoSrc: "work-history.svg",
    },
    {
      label: "Programming Skills",
      logoSrc: "programming-skills.svg",
    },
    {
      label: "Projects",
      logoSrc: "projects.svg",
    },
  ];

  const programmingSkillDetails = [
    { skill: "Javascript", ratingPercentage: 80},
    { skill: "JQuery", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Maria DB", ratingPercentage: 75 },
    { skill: "PostgreSQL", ratingPercentage: 75 },
    { skill: "Django", ratingPercentage: 65 },
    { skill: "Java", ratingPercentage: 75 },
    { skill: "Flutter", ratingPercentage: 70 },
  ];

  const projectDetails = [
    {
      title: "Personal Resumé Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A personal Resumé website to showcase all my details and projects in one place.",
      subHeading: "Technologies Used: React JS, Node JS, Bootstrap",
    },
    {
      title: "Simple E-CIF",
      duration: { fromDate: "2021", toDate: "2022" },
      description: "A simple forms made for a client.",
      subHeading: "Technologies Used: Django, React JS, PostgreSQL",
    },
    {
      title: "UPLB Ugnayan ng Pahinungod Volunteer Portal",
      duration: { fromDate: "2019", toDate: "2021" },
      description:
        "Creation and maintenance of the organization's volunteer web portal",
      subHeading: "Technologies Used: React JS, Bootstrap, Maria DB",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of the Philippines Los Banos"}
        subHeading={"BACHELOR OF SCIENCE IN COMPUTER SCIENCE"}
        fromDate={"2015"}
        toDate={"Present"}
      />
      <ResumeHeading
        heading={"Internation Academe of EnScieMa"}
        subHeading={"High School Diploma"}
        fromDate={"2011"}
        toDate={"2015"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Armont Business Solutions"}
        subHeading={"Web Developer"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Used Django and React to create web applications
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Developed a simple E-CIF with backend services for a client
        </span>
        <br />
        <span className="resume-description-text">
          - Developed an RFID app for a client
        </span>
      </div>
      <ResumeHeading
        heading={"UPLB Ugnayan ng Pahinungod"}
        subHeading={"Web Developer Intern"}
        fromDate={"2019"}
        toDate={"2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Worked as a web developer to make a volunteer portal site.
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Created a volunteer portal site from the ground up.
        </span>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;
    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarouselOffsetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carouselOffsetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resumé"} subHeading={"My Formal Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
