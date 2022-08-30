import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import '../../node_modules/react-vertical-timeline-component/style.min.css';
import { RiReactjsLine } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { MdWork } from 'react-icons/md';

const Work = () => {

    const profile = [
        {
            id: 1,
            component: <RiReactjsLine size={30} />,
            date: "Aug 2022 - Present",
            title: "Programmer Analyst Trainee",
            body: "Cognizant, Full Time",
            description: "DX React Jr Developer"
        },
        {
            id: 2,
            component: <IoLogoJavascript size={30} />,
            date: "Feb 2022 - July 2022 · 6 mos",
            title: "GenC Elevate Intern",
            body: "Cognizant, Internship",
            description: "Skills :- MongoDB, Express JS, React JS, Node JS"
        },
        {
            id: 3,
            component: <MdWork size={30} />,
            date: "Sep 2021 - Feb 2022 · 6 mos",
            title: "Incoming GenC Elevate",
            body: "Cognizant, Full Time",
            description: "Got placement offer for the GenC Elevate Developer Role"
        }
    ];

    return (
        <div name="Work">
            <div className="work-container">
                <div className="row work-row justify-content-center">
                    <div className="col-md-4 col-10 text-center work-head">
                        <h1>Work</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-10 col-11 work-info">
                        <VerticalTimeline lineColor='#f2ab00'>
                            {
                                profile.map(({ id, component, date, title, body, description }) => (
                                    <VerticalTimelineElement
                                        key={id}
                                        className="vertical-timeline-element"
                                        icon={component}
                                        iconStyle={{ "background": "#f2ab00", "color": "#fff" }}
                                        date={date}
                                    >
                                        <h5>{title}</h5>
                                        <h6>{body}</h6>
                                        <p>{description}</p>
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

export default Work