import React from "react";
import { motion } from "framer-motion";
import data from "../assets/data.json";
import Typewriter from "typewriter-effect";

const Timeline = () => {
  return (
    <div id="timeline">
      <h1>
        <Typewriter
          options={{
            strings: ["PROJECTS"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="timelineBox">
        {data.projects.map((item, index) => (
          <TimelineItem
            key={item.title}
            index={index}
            heading={item.title}
            text={item.date}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index, description, url }) => {
  const tiltEffect =
    index % 2 === 0
      ? {
          scale: 1.05,
          rotateX: -10,
          rotateY: 10,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
        }
      : {
          scale: 1.05,
          rotateX: -10,
          rotateY: -10,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
        };

  return (
    <div
      className={`timelineItem ${
        index % 2 === 0 ? "leftTimeline" : "rightTimeline"
      }`}
    >
      <motion.div
        whileHover={tiltEffect}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="inner"
      >
        <h2>{heading}</h2>
        <p>{text}</p>
        <div className="descriptionBox">
          <p>{description}</p>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button>Checkout</button>
        </a>
      </motion.div>
    </div>
  );
};

export default Timeline;
