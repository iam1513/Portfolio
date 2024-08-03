import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact">
      <div className="text-profile">
        <h1>PROFILES</h1>
      </div>
      <div>
        <article>
          <a
<<<<<<< HEAD
            href="https://www.linkedin.com"
=======
            href="https://www.linkedin.com/in/om-shelke-00172a250/"
>>>>>>> ebe8de32c392dac6acf4a36bc07ad7bff14ffc37
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ animationDelay: "0.3s" }}>
              <FaLinkedinIn />
<<<<<<< HEAD
              <p>Google</p>
            </div>
          </a>
          <a
            href="https://www.amazon.com"
=======
              <p>LinkedIn</p>
            </div>
          </a>
          <a
            href="https://github.com/iam1513"
>>>>>>> ebe8de32c392dac6acf4a36bc07ad7bff14ffc37
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ animationDelay: "0.5s" }}>
              <FaGithub />
              <p>Github</p>
            </div>
          </a>
          <a
<<<<<<< HEAD
            href="https://www.youtube.com"
=======
            href="https://leetcode.com/u/______OM______/"
>>>>>>> ebe8de32c392dac6acf4a36bc07ad7bff14ffc37
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ animationDelay: "0.7s" }}>
              <SiLeetcode />
              <p>Leetcode</p>
            </div>
          </a>
          <a
<<<<<<< HEAD
            href="https://www.instagram.com"
=======
            href="https://codeforces.com/profile/iam1513"
>>>>>>> ebe8de32c392dac6acf4a36bc07ad7bff14ffc37
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ animationDelay: "0.9s" }}>
              <SiCodeforces />
              <p>codeforces</p>
            </div>
          </a>
        </article>
      </div>
    </div>
  );
};

export default Contact;
