import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-5 text-white bg-dark">
      <div className="container">
        <h1 className="text-center mb-4 text-info">Education</h1>
        
        <div className="row">
          {/* Left Side (School & University) */}
          <div className="col-md-6 border-end border-info">
            <div className="position-relative mb-4">
              <h3 className="text-end text-info">2018</h3>
              <p className="bg-black text-light p-3 rounded border border-info text-end">
                I completed my <strong>Secondary Education</strong> from Hasegawa Memorial Public School, Karimabad, Hunza, Gilgit, in the Science Department.
              </p>
            </div>

            <div className="position-relative">
              <h3 className="text-end text-info">2026</h3>
              <p className="bg-black text-light p-3 rounded border border-info text-end">
                I am pursuing my <strong>Bachelor's in Computer Science (BSCS)</strong> from COMSATS University Islamabad.
              </p>
            </div>
          </div>

          {/* Right Side (College) */}
          <div className="col-md-6 border-start border-info">
            <div className="position-relative mt-5">
              <h3 className="text-info">2022</h3>
              <p className="bg-black text-light p-3 rounded border border-info">
                I completed my <strong>College Education</strong> from Govt Boys Degree College, Aliabad, Hunza, Gilgit, in the Computer Science Department.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
