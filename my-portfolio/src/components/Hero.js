import React from 'react';
import profileImage from '../images/IMG_0666.JPG';

function Hero() {
    return (
        
        <section className="text-white d-flex align-items-start justify-content-start bg-dark" id="home">
            <div id='Hero-Div' className="container" style={{ marginTop: '250px', textAlign: 'left', marginRight:'400px' }}>
                <h1 id='Home-H1'>Hi, it's <span className="text-info">Shahzeb</span></h1>
                <h2 id='Home-H2'>I'm a <span className="text-info">Full-Stack Developer & UI/UX Designer</span></h2>
                <p className="lead">Proficient in MERN Stack Development UI/UX (Figma, AdobeXD, Sketch, Canva) </p>
                <div className="mt-4">
                    <a href="https://github.com/RootUser-999" className="btn btn-outline-light mx-2">GitHub</a>
                    <a href="https://linkedin.com/in/shahzeb-aman-4b826b292" className="btn btn-outline-info mx-2">LinkedIn</a>
                    <a href="https://leetcode.com/u/SHAHZEB_999/" className="btn btn-outline-warning mx-2">LeetCode</a>
                </div>
                <div className="mt-4">
                    <button className="btn btn-info mx-2">Hire</button>
                    <button className="btn btn-outline-light mx-2">Contact</button>
                </div>
            </div>
            <div id='Hero-img'>
                <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div id="des-div" className="position-absolute bottom-0 start-0 p-3 w-100 text-center text-white ">
                <p id="des-p">I'm a passionate <strong>MERN-Stack Developer</strong> and <strong>UI/UX Designer</strong> with a focus on creating dynamic, responsive web applications and intuitive user experiences. I enjoy transforming complex problems into sleek, user-friendly designs while leveraging modern technologies like <strong>MongoDB, Express.js, React,</strong> and <strong>Node.js</strong>. Continuously learning and pushing creative boundaries, I'm always excited to take on new challenges that blend functionality with exceptional design.</p>
            </div>
        </section>
    );
}

export default Hero;
