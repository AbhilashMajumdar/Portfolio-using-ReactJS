import React from 'react'

const Projects = () => {

  const reactProject = [
    {
      id: 1,
      title: "Weather App using React JS",
      des: "A React weather app , users can find any location's weather info.",
      date: "June 2022",
      link: "https://github.com/AbhilashMajumdar/React-Weather-App"
    },
    {
      id: 2,
      title: "Portfolio using React JS",
      des: "In this app , where i described all the informations related to me.",
      date: "August 2022",
      link: "https://github.com/AbhilashMajumdar/Portfolio-using-ReactJS"
    }
  ];

  const mernProject = [
    {
      id: 3,
      title: "MERN Authentication and Authorization",
      des: "Here the user can sign in and then login and can go to welcome page.",
      date: "July 2022",
      link: "https://github.com/AbhilashMajumdar/Mern-Auth"
    },
    {
      id: 4,
      title: "CRUD application using MERN",
      des: "Here anyone can enter all of her/his details and can perform crud operations after signup and login.",
      date: "August 2022",
      link: "https://github.com/AbhilashMajumdar/Portfolio-using-MERN"
    }
  ];

  return (
    <>
      <div className="project-container">
        <div className="row justify-content-center">
          <div className="col-md-4 col-10 text-center project-head">
            <h1>Projects</h1>
          </div>
        </div>

        <div className="row justify-content-evenly mt-3 pb-5">
          {
            reactProject.map(({ id, title, des, date, link }) => (
              <div className={`col-md-4 col-10 record${id}`} key={id}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h5 className="card-subtitle mb-2 text-muted">{date}</h5>
                    <p className="card-text text-dark my-3">{des}</p>
                    <a href={link} className="btn btn-dark" target='_blank' rel="noreferrer">Github Link</a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="row justify-content-evenly my-5">
          {
            mernProject.map(({ id, title, des, date, link }) => (
              <div className={`col-md-4 col-10 record${id}`} key={id}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h5 className="card-subtitle mb-2 text-muted">{date}</h5>
                    <p className="card-text text-dark my-3">{des}</p>
                    <a href={link} className="btn btn-dark" target='_blank' rel="noreferrer">Github Link</a>
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

export default Projects