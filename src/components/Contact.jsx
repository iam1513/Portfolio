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
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ animationDelay: "0.3s" }}>
              <FaLinkedinIn />
              <p>Google</p>
            </div>
          </a>
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ animationDelay: "0.5s" }}>
              <FaGithub />
              <p>Github</p>
            </div>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ animationDelay: "0.7s" }}>
              <SiLeetcode />
              <p>Leetcode</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com"
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
