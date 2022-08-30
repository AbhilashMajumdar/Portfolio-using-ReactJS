import React from 'react'
import html from '../images/skills/html.png'
import css from '../images/skills/css.png'
import bootstrap from '../images/skills/bootstrap.png'
import javascript from '../images/skills/javascript.png'
import mongodb from '../images/skills/mongodb.png'
import expressjs from '../images/skills/expressjs.png'
import reactjs from '../images/skills/reactjs.png'
import nodejs from '../images/skills/nodejs.png'
import c_plus_plus from '../images/skills/c_plus_plus.png'
import java from '../images/skills/java.png'
import postman from '../images/skills/postman.png'
import github from '../images/skills/github.png'

const Skills = () => {

  const skills1 = [
    {
      id: 1,
      image: html,
      text: "Html",
      bgColor: "red"
    },
    {
      id: 2,
      image: css,
      text: "CSS",
      bgColor: "blue"
    },
    {
      id: 3,
      image: bootstrap,
      text: "Bootstrap",
      bgColor: "violet"
    },
    {
      id: 4,
      image: javascript,
      text: "JavaScript",
      bgColor: "yellow"
    },
  ];

  const skills2 = [
    {
      id: 5,
      image: mongodb,
      text: "Mongo DB",
      bgColor: "yellow"
    },
    {
      id: 6,
      image: expressjs,
      text: "Express JS",
      bgColor: "white"
    },
    {
      id: 7,
      image: reactjs,
      text: "React JS",
      bgColor: "#4c669f"
    },
    {
      id: 8,
      image: nodejs,
      text: "Node JS",
      bgColor: "green"
    },
  ];

  const skills3 = [
    {
      id: 9,
      image: c_plus_plus,
      text: "C++",
      bgColor: "#b1e9fe"
    },
    {
      id: 10,
      image: java,
      text: "Java",
      bgColor: "#f2ab00"
    },
    {
      id: 11,
      image: github,
      text: "Github",
      bgColor: "gray"
    },
    {
      id: 12,
      image: postman,
      text: "Postman",
      bgColor: "orange"
    },
  ];

  return (
    <>
      <div className="skills-container">
        <div className="row justify-content-center">
          <div className="col-md-4 col-10 text-center skills-head">
            <h1>My Skills</h1>
          </div>
        </div>

        <div className="row justify-content-evenly">
          {
            skills1.map(({ id, image, text, bgColor }) => (
              <div className={`col-lg-2 col-5 skill${id}`} key={id}>
                <div className="card" style={{"boxShadow" : `3px 3px 3px 3px ${bgColor}`}} >
                  <img src={image} className="card-img-top" alt="Skills img"/>
                    <div className="card-body">
                      <h5 className="card-title" style={{"color":`${bgColor}`}}>{text}</h5>
                    </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="row justify-content-evenly my-5">
          {
            skills2.map(({ id, image, text, bgColor }) => (
              <div className={`col-lg-2 col-5 skill${id}`} key={id}>
                <div className="card" style={{"boxShadow" : `3px 3px 3px 3px ${bgColor}`}} >
                  <img src={image} className="card-img-top" alt="Skills img"/>
                    <div className="card-body">
                      <h5 className="card-title" style={{"color":`${bgColor}`}}>{text}</h5>
                    </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="row justify-content-evenly mb-5">
          {
            skills3.map(({ id, image, text, bgColor }) => (
              <div className={`col-lg-2 col-5 skill${id}`} key={id}>
                <div className="card" style={{"boxShadow" : `3px 3px 3px 3px ${bgColor}`}} >
                  <img src={image} className="card-img-top" alt="Skills img"/>
                    <div className="card-body">
                      <h5 className="card-title" style={{"color":`${bgColor}`}}>{text}</h5>
                    </div>
                </div>
              </div>
            ))
          }
        </div>


      </div>
    </>
  )
}

export default Skills