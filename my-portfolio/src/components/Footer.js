import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 text-center">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} Shahzeb Aman | All Rights Reserved</p>

        <div className="d-flex justify-content-center gap-3">
          <a href="https://github.com/RootUser-999" target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} className="text-info" />
          </a>
          <a href="https://www.linkedin.com/in/shahzeb-aman-4b826b292" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} className="text-info" />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope size={25} className="text-info" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
