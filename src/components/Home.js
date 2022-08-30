import React from 'react'
import Typed from 'react-typed'
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import cv from '../documents/Abhilash_Majumdar.pdf';

const Home = () => {

  const homeLink = [
    {
        id: 1,
        url: "https://www.facebook.com/abhilash.majumdar.1/",
        component: <BsFacebook />
    },
    {
        id: 2,
        url: "https://twitter.com/valentineabhi",
        component: <BsTwitter />
    },
    {
        id: 3,
        url: "https://www.linkedin.com/in/abhilash-majumdar-b20b0112a/",
        component: <BsLinkedin />
    },
    {
        id: 4,
        url: "https://github.com/AbhilashMajumdar",
        component: <BsGithub />
    },
    {
        id: 5,
        url: "mailto:abhilashmajumdar306@gmail.com",
        component: <MdEmail />
    },
];


  return (
    <>
      <div className="home-container" id='home'>
        <div className='text-center'>
          <div className="home-head">
            <h1>Abhilash Majumdar</h1>
          </div>
          <div className="home-body">
            <h3 className='my-3'>I am a <span>
              <Typed
                className='typed-text'
                strings={["Web Developer", "React Developer", "MERN Developer"]}
                typeSpeed={60}
                backSpeed={60}
                loop={Infinity}
              /></span>
            </h3>
          </div>
          <div className='home-social my-3'>
            {
              homeLink.map(({ id, url, component }) => (
                <a href={url} target='_blank' rel="noreferrer" key={id} >
                  {component}
                </a>
              ))
            }
          </div>
          <div className="home-btn my-4">
            <a href={cv} download={"Abhilash Majumdar"} rel="noreferrer">
              <button className='download-btn'>Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home