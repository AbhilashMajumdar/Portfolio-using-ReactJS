import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import '../../node_modules/react-vertical-timeline-component/style.min.css';
import { FaUserGraduate } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { FaSchool } from 'react-icons/fa';

const Education = () => {

  const profile = [
    {
      id: 1,
      component: <FaUserGraduate size={20} />,
      date: "Sept 2019 - July 2022",
      title: "Master of Computer Applications",
      description: "Dept - CSE, Jadavpur University",
      grade: "CGPA - 8.94 / 10"
    },
    {
      id: 2,
      component: <FaGraduationCap size={20} />,
      date: "July 2016 - July 2019",
      title: "Bachelor of Computer Science (Hons)",
      description: "Mankar college, Under Kazi Nazrul University",
      grade: "CGPA - 9.08 / 10"
    },
    {
      id: 3,
      component: <IoMdSchool size={20} />,
      date: "April 2015 - Feb 2016",
      title: "W.B.C.H.S.E (12th Std) , Science",
      description: "Mankar High School",
      grade: "Marks - 82 %"
    },
    {
      id: 4,
      component: <FaSchool size={20} />,
      date: "April 2013 - March 2014",
      title: "W.B.B.S.E (10th Std)",
      description: "Mankar High School",
      grade: "Marks - 85.57 %"
    }
  ];


  return (
    <div name="Education">
      <div className="education-container">
        <div className="row education-row justify-content-center">
          <div className="col-md-4 col-10 text-center education-head">
            <h1>Education</h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10 col-11 education-info">
            <VerticalTimeline lineColor='#f2ab00'>
              {
                profile.map(({ id, component, date, title, description, grade }) => (
                  <VerticalTimelineElement
                    key={id}
                    className="vertical-timeline-element"
                    icon={component}
                    iconStyle={{ "background": "#f2ab00", "color": "#fff" }}
                    date={date}
                  >
                    <h5>{title}</h5>
                    <h6>{description}</h6>
                    <p>{grade}</p>
                  </VerticalTimelineElement>
                ))
              }
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education