import React from 'react'
import profile_pic from '../images/pic/pic.jpg'

const About = () => {

  const profileInfo = {
    name: "Abhilash Majumdar",
    dob: "June 30th, 1998",
    address: "Mankar, Purba Bardhaman, West Bengal",
    job: "Jr React Developer",
    mail: "abhilashmajumdar306@gmail.com",
    phone: "7872909202"
  }

  const { name, dob, address, job, mail, phone } = profileInfo;

  return (
    <>
      <div className="about-container">
        <div className="row justify-content-center">
          <div className="col-md-4 col-10 text-center about-head">
            <h1>About Me</h1>
          </div>
        </div>

        <div className="row justify-content-center about-img-row">
          <div className="col-md-3 col-10 text-center about-img d-flex align-items-center">
            <img src={profile_pic} alt="Profile" />
          </div>


          <div className="col-md-6 col-10 about-data d-flex align-items-center">
            <p>
              I love to code, design and program. I have learned Data Structure, OOPS - C++, JAVA, Database Managament Systems. Apart from this i have also learned Html, Css, Java Script. I have interest in Web Development. Currently focusing on React JS & Node JS. I have worked on several MERN projects. I'm always up for learning new things. My objective remains to be working in an environment that will encourage me to learn, grow & utilise my skills appropriately.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-12 col-12 about-info">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-10">
                <div className="about-name my-3">
                  <span className='about-key'>Name :- </span> <br />
                  <span className='about-value'>{name}</span>
                </div>
                <div className="about-job my-3">
                  <span className='about-key'>Job :- </span> <br />
                  <span className='about-value'>{job}</span>
                </div>
              </div>

              <div className="col-lg-3 col-10">
                <div className="about-dob my-3">
                  <span className='about-key'>Date of Birth :- </span> <br />
                  <span className='about-value'>{dob}</span>
                </div>
                <div className="about-phone my-3">
                  <span className='about-key'>Phone :- </span> <br />
                  <span className='about-value'>{phone}</span>
                </div>
              </div>

              <div className="col-lg-3 col-10">
                <div className="about-address my-3">
                  <span className='about-key'>Address :- </span> <br />
                  <span className='about-value'>{address}</span>
                </div>
                <div className="about-email my-3">
                  <span className='about-key'>Email :- </span> <br />
                  <span className='about-value'>{mail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About