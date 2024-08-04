import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
        },
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Om Shelke
          </motion.h1>

          <div
            style={{
              color: "#cf6679",
              fontSize: "3em",
              height: "100px",
              // margin: "20px 0",
              letterSpacing: "5px",
              display: "flex",
              // alignItems: "center",
            }}
          >
            <span
              style={{
                color: "#03dac5",
              }}
            >
              A
            </span>
            <Typewriter
              options={{
                strings: ["Developer", "Designer"],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterWrapper",
              }}
            />
          </div>

          <div>
            <a href="mailto:omshelke1513@gmail.com">Hire Me</a>
            <a href="#timeline">
              Projects <BsArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <section className="relative">
        <img src={me} alt="Om" className="relative z-10" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
