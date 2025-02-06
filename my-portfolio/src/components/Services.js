import React from "react";
import { FaCode, FaLaptopCode, FaServer, FaLock } from "react-icons/fa"; // Icons for services

const Services = () => {
  return (
    <section id="services" className="py-5 bg-black text-white">
      <div className="container">
        <h1 className="text-center text-info mb-5">Services</h1>
        
        <div className="row text-center">
          {/* Service 1: Frontend Development */}
          <div className="col-md-3">
            <div className="card bg-dark text-light border-info p-4">
              <FaCode size={50} className="text-info mb-3" />
              <h5>Frontend Development</h5>
              <p>Building interactive UI/UX using ReactJS, HTML, CSS, and JavaScript.</p>
            </div>
          </div>

          {/* Service 2: Backend Development */}
          <div className="col-md-3">
            <div className="card bg-dark text-light border-info p-4">
              <FaServer size={50} className="text-info mb-3" />
              <h5>Backend Development</h5>
              <p>Developing APIs & server-side logic with Node.js, Express & databases.</p>
            </div>
          </div>

          {/* Service 3: Full-Stack Development */}
          <div className="col-md-3">
            <div className="card bg-dark text-light border-info p-4">
              <FaLaptopCode size={50} className="text-info mb-3" />
              <h5>Full-Stack Development</h5>
              <p>Creating end-to-end scalable web applications using the MERN stack.</p>
            </div>
          </div>

          {/* Service 4: Cybersecurity */}
          <div className="col-md-3">
            <div className="card bg-dark text-light border-info p-4">
              <FaLock size={50} className="text-info mb-3" />
              <h5>Cybersecurity</h5>
              <p>Performing penetration testing & securing web applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
