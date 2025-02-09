import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.section 
      id="education" 
      className="py-5 text-white bg-dark"
      initial={{ opacity: 0, y: 20 }}  
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.6 }}   
    >
      <div className="container mt-5">
        <h1 className="text-center mb-5 text-info fw-bold" style={{ fontSize: '2.5rem' }}>
          Education
        </h1>

        <div className="row">
          {/* Left Side (School & University) */}
          <div id="edu-divL" className="col-md-6 border-end border-info px-4">
            <div className="position-relative mb-5">
              <h3 className="text-end text-info fw-bold" style={{ fontSize: '2rem' }}>2018</h3>
              <p className="bg-black text-light p-4 rounded border border-info text-end shadow">
                I completed my <strong>Secondary Education</strong> from Hasegawa Memorial Public School, 
                Karimabad, Hunza, Gilgit, in the Science Department.
              </p>
            </div>

            <div id="edu-divL2" className="position-relative" style={{ marginTop: '11rem' }}>
              <h3 className="text-end text-info fw-bold" style={{ fontSize: '2rem' }}>2026</h3>
              <p className="bg-black text-light p-4 rounded border border-info text-end shadow">
                I am pursuing my <strong>Bachelor's in Computer Science (BSCS)</strong> from 
                COMSATS University Islamabad.
              </p>
            </div>
          </div>

          {/* Right Side (College) */}
          <div id="edu-divR" className="col-md-6 border-start border-info px-4" style={{ marginTop: '6rem' }}>
            <div className="position-relative" style={{ marginTop: '4rem' }}>
              <h3 className="text-info fw-bold" style={{ fontSize: '2rem' }}>2022</h3>
              <p className="bg-black text-light p-4 rounded border border-info shadow">
                I completed my <strong>College Education</strong> from Govt Boys Degree College, 
                Aliabad, Hunza, Gilgit, in the Computer Science Department.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
