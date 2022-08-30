import React from 'react'
import bekarst from '../images/achievement/BakerSt/logo-dark.webp';
import hackerrank from '../images/achievement/HackerRank/hackerank-logo.png'
import cts from '../images/achievement/Cognizant/Cognizant_Logo.jpg'

const Achievements = () => {

  const record = [
    {
      id: 1,
      title: "HackerRank",
      desc: "5* at HackerRank (Problem Solving), CPP, JAVA , SQL & C Language.",
      img: hackerrank,
      link: "https://www.hackerrank.com/abhilashmajumda1",
      bg: "btn-success",
      color: "success"
    },
    {
      id: 2,
      title: "221 B Baker Street",
      desc: "Got selected as a Salesforce Developer on Campus Placement 2022.",
      img: bekarst,
      link: "https://mail.google.com/mail/u/0/#search/cyan%40twotwo1bbs.com/FMfcgzGmvLMGQxrHjdsQfWbkzBTlBzsw",
      bg: "btn-dark",
      color: "dark"
    },
    {
      id: 3,
      title: "Cognizant",
      desc: "Got selected as a Programmer Analyst Trainee on Campus Placement 2021",
      img: cts,
      link: "https://mail.google.com/mail/u/0/#search/selected+in+Cognizant/FMfcgzGqPzJRDRGlqJGKLgdLCXXbsnGZ",
      bg: "btn-primary",
      color: "primary"
    }
  ]

  return (
    <>
      <div className="achievement-container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-10 text-center achievement-head">
            <h1>Achievements</h1>
          </div>
        </div>

        <div className="row justify-content-evenly achievement-row">
          {
            record.map(({ id, title, desc, img, link, bg, color }) => (
              <div className="col-lg-3 col-10 achievement-info" key={id}>
                <div className="card text-center">
                  <img src={img} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3 className={`card-title text-${color}`}>{title}</h3>
                    <p className="card-text">{desc}</p>
                    <a href={link}
                      className={`btn ${bg} my-3`}
                      target='_blank'
                      rel="noreferrer"
                    >Link</a>
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

export default Achievements