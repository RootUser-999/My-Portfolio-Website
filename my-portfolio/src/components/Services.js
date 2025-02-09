import React from "react";
import { FaCode, FaLaptopCode, FaServer, FaLock } from "react-icons/fa"; // Icons for services
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section 
          id="education" 
          className="py-5 text-white bg-dark"
          initial={{ opacity: 0, y: 20 }}  
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.6 }}   
        >
    <section id="services" className="py-5 bg-black text-white mt-5">
      <div id='ser-elements' className="container">
        <h1 className="text-center text-info mb-5">Services</h1>
        
        <div className="row text-center">
         {/* Service 1: Frontend Development */}
<div id="service-frontend" className="col-md-3 d-flex">
  <div className="card bg-dark text-light border-info p-4 w-100">
    <FaCode size={50} className="text-info mb-3" />
    <h5>Frontend Development</h5>
    <p>Building interactive UI/UX using ReactJS, HTML, CSS, and JavaScript.</p>
  </div>
</div>

{/* Service 2: Backend Development */}
<div id="service-backend" className="col-md-3 d-flex">
  <div className="card bg-dark text-light border-info p-4 w-100">
    <FaServer size={50} className="text-info mb-3" />
    <h5>Backend Development</h5>
    <p>Developing APIs & server-side logic with Node.js, Express & databases.</p>
  </div>
</div>

{/* Service 3: UX/UI Designer */}
<div id="service-ux" className="col-md-3 d-flex">
  <div className="card bg-dark text-light border-info p-4 w-100">
    <FaLaptopCode size={50} className="text-info mb-3" />
    <h5>UI/UX Designer</h5>
    <p>Designing intuitive and user-friendly interfaces with expertise in Figma, Adobe XD, Canva, and Sketch for seamless user experiences.</p>
  </div>
</div>

{/* Service 4: Cybersecurity */}
<div id="service-cybersecurity" className="col-md-3 d-flex">
  <div className="card bg-dark text-light border-info p-4 w-100">
    <FaLock size={50} className="text-info mb-3" />
    <h5>Cybersecurity</h5>
    <p>Performing penetration testing & securing web applications.</p>
  </div>
</div>

        </div>
      </div>
    </section> </motion.section>
   
  );
};

export default Services;
