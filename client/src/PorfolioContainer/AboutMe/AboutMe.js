import React, { useEffect } from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";

import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I'm a developer looking for further skill and career development through experience in the industry by being exposed to a professional working environment.",
    highlights: {
      bullets: [
        "Has previous experience working as a Web Developer",
        "Has had several projects using React and Node",
        "Inclined to Front End Development",
        "Managed Databases",
      ],
    },
    heading: "Here are a Few Highlights:",
  };

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading
          title={"About Me"}
          subHeading={"A Little About Myself"}
        />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>Contact Me</button>
              <a
                href="Doctor-Amherstia-Resume.pdf"
                download="Doctor-Amherstia-Resume.pdf"
              >
                <button className="btn highlighted-btn">Resumé</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
