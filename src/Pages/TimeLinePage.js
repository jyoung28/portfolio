import React from "react";

import "../App.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { ReactComponent as IrvIcon } from "./viking.svg";
import { ReactComponent as LifeIcon } from "./buoy.svg";
import { useTypingEffect } from "../Components/TypingEffect";


import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const TimelinePage = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#8D54D5" };
  let irvIconStyles = { background: "#516AD1" };
  let lifeIconStyles = { background: "#b93c3c" };

  const getStyle = (icon) => {
    if (icon === "work") {
        return workIconStyles
    } else if (icon === "school") {
        return schoolIconStyles;
    } else if (icon ==="irv"){
        return irvIconStyles;
    } else {
      return lifeIconStyles;
    }
  }

  const getIcon = (icon) => {
    if (icon === "work") {
        return <WorkIcon/>
    } else if (icon === "school") {
        return <SchoolIcon/>;
    } else if (icon === "irv") {
        return <IrvIcon/>;
    } else {
      return <LifeIcon/>
    }
  }

   const getbutton = (icon) => {
    if (icon === "work") {
        return "workButton"
    } else if (icon === "school") {
        return "schoolButton";
    } else if (icon === "irv") {
        return "irvButton";
    }  else {
      return "lifeButton"
    }
   }

  return (
    <div className="container">
      <h1 className="title">{useTypingEffect("Career Timeline", 100)}</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
        //   let isWorkIcon = element.icon === "work";
            let whatIcon = element.icon;
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={getStyle(whatIcon)}
              icon={getIcon(whatIcon)}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    getbutton(whatIcon)
                  }`}
                  href={element.link}
                //   target="_blank"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default TimelinePage;