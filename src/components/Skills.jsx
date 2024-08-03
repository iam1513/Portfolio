import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSass,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiPython,
<<<<<<< HEAD
=======
  SiSequelize,
  SiExpress,
>>>>>>> ebe8de32c392dac6acf4a36bc07ad7bff14ffc37
} from "react-icons/si";
import Typewriter from "typewriter-effect";

const Skills = () => {
  return (
    <div id="skills">
      <h1>
        <Typewriter
          options={{
            strings: ["SKILLS"],
            autoStart: true,
            loop: true,
            delay: 500,
            deleteSpeed: 500,
          }}
        />
      </h1>
      <section>
        <div>
          <h1>Frontend</h1>
          <article>
            <span>
              <FaHtml5 />
              <h3>HTML</h3>
            </span>
            <span>
              <FaCss3Alt />
              <h3>CSS</h3>
            </span>
            <span>
<<<<<<< HEAD
              <FaJs />
              <h3>JavaScript</h3>
            </span>
            <span>
=======
>>>>>>> ebe8de32c392dac6acf4a36bc07ad7bff14ffc37
              <FaReact />
              <h3>React</h3>
            </span>
          </article>
        </div>
        <div>
          <h1>Backend</h1>
          <article>
            <span>
              <FaNodeJs />
              <h3>Node.js</h3>
            </span>
            <span>
<<<<<<< HEAD
              <SiMongodb />
              <h3>MongoDB</h3>
            </span>
            <span>
              <SiMysql />
              <h3>MySQL</h3>
=======
              <SiExpress />
              <h3>Express</h3>
>>>>>>> ebe8de32c392dac6acf4a36bc07ad7bff14ffc37
            </span>
          </article>
        </div>
        <div>
          <h1>Languages</h1>
          <article>
            <span>
              <SiCplusplus />
              <h3>C++</h3>
            </span>
            <span>
              <SiPython />
              <h3>Python</h3>
            </span>
            <span>
              <FaJs />
              <h3>JavaScript</h3>
            </span>
          </article>
        </div>
        <div>
          <h1>Databases</h1>
          <article>
            <span>
              <SiMongodb />
              <h3>MongoDB</h3>
            </span>
            <span>
<<<<<<< HEAD
              <FaDatabase />
              <h3>SQL</h3>
            </span>
            <span>
              <SiMysql />
              <h3>MySQL</h3>
            </span>
=======
              <SiMysql />
              <h3>MySQL</h3>
            </span>
            <span>
              <SiSequelize />
              <h3>Sequelize</h3>
            </span>
>>>>>>> ebe8de32c392dac6acf4a36bc07ad7bff14ffc37
          </article>
        </div>
      </section>
    </div>
  );
};

export default Skills;
