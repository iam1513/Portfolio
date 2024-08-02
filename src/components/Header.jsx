import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2>Om.</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#timeline">Projects</a>
      <a href="#skills">Skills</a>

      {/* <a href="#services">Services</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#contact">Contact</a> */}
    </div>
  </>
);

export default Header;
