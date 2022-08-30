import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from'react-vertical-timeline-component'
import '../../node_modules/react-vertical-timeline-component/style.min.css';
import { SiJavascript } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { RiReactjsLine } from 'react-icons/ri';
import { FaPython } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const Certifications = () => {

  const certificates = [
    {
      id: 1,
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      desc: "Udemy, Cognizant",
      link: "https://cognizant.udemy.com/certificate/UC-040c4cb4-a860-494c-8862-6bdb191b217a/",
      date: "March 2022 - April 2022",
      component: <SiJavascript size={30} />,
    },
    {
      id: 2,
      title: "Build Responsive Real-World Websites with HTML, CSS and Bootstrap",
      desc: "Udemy, Cognizant",
      link: "https://cognizant.udemy.com/certificate/UC-addbb2d7-8cb8-4cfd-9743-8544a6215eda/",
      date: "Feb 2022 - March 2022",
      component: <DiJavascript size={30} />,
    },
    {
      id: 3,
      title: "Front-End Web Development with React",
      desc: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/LPPJB2SZVNBS",
      date: "Oct 2021 - Nov 2021",
      component: <RiReactjsLine size={30} />,
    },
    {
      id: 4,
      title: "Learn Python Programming : Step By Step Guide for Beginners",
      desc: "Udemy",
      link: "https://www.udemy.com/certificate/UC-054a5d40-40fb-4be3-92d0-8e4888cdf4ad/",
      date: "Nov 2020",
      component: <FaPython size={30} />,
    },
    {
      id: 5,
      title: "Programming with C++ Language: The Complete Course",
      desc: "Udemy",
      link: "https://www.udemy.com/certificate/UC-3e30672d-9535-4ab1-afee-0cad7e1528c5/",
      date: "Oct 2020",
      component: <SiCplusplus size={30} />,
    },
    {
      id: 6,
      title: "Java (Basic)",
      desc: "HackerRank",
      link: "https://www.hackerrank.com/certificates/235ed866d52f",
      date: "June 2021",
      component: <FaJava size={30} />,
    },
    {
      id: 7,
      title: "SQL (Intermediate)",
      desc: "HackerRank",
      link: "https://www.hackerrank.com/certificates/f1aa7b8a2ed7",
      date: "June 2021",
      component: <SiMysql size={30} />,
    },
    {
      id: 8,
      title: "SQL (Basic)",
      desc: "HackerRank",
      link: "https://www.hackerrank.com/certificates/5daef14b5ea4",
      date: "June 2021",
      component: <AiOutlineConsoleSql size={30} />,
    }
  ];

  return (
    <>
      <div className="certificate-container">
        <div className="row certificate-row justify-content-center">
          <div className="col-md-6 col-10 text-center certificate-head">
            <h1>My Certificates</h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-12 col-11 certificate-info">
            <VerticalTimeline lineColor='#f2ab00'>
              {
                certificates.map(({ id, title, desc, link, date, component }) => (
                  <VerticalTimelineElement
                    key={id}
                    className="vertical-timeline-element"
                    icon={component}
                    iconStyle={{ "background": "#f2ab00", "color": "#fff" }}
                    date={date}
                  >
                    <h5>{title}</h5>
                    <h6>{desc}</h6>
                    <a href={link} 
                      target='_blank' 
                      rel="noreferrer"
                      className='text-warning'
                      style={{"textDecoration":"none"}}
                    >Credential URL</a>
                  </VerticalTimelineElement>
                ))
              }
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  )
}

export default Certifications