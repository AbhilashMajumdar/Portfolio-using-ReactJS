import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 9,
            link: "Home",
            url: '/home'
        },
        {
            id: 1,
            link: "About",
            url: '/about'
        },
        {
            id: 2,
            link: "Work",
            url: '/work'
        },
        {
            id: 3,
            link: "Education",
            url: '/education'
        },
        {
            id: 4,
            link: "Projects",
            url: '/projects'
        },
        {
            id: 5,
            link: "Skills",
            url: '/skills'
        },
        {
            id: 6,
            link: "Achievements",
            url: '/achievements'
        },
        {
            id: 7,
            link: "Certifications",
            url: '/certifications'
        },
        {
            id: 8,
            link: "Contact",
            url: '/contact'
        },
    ];

    const handleNavState = () => {
        setNav(!nav);
    }

    const handleNavbar = () => {
        setNav(!nav);
        document.getElementById('navbarSupportedContent').classList.remove('show');
    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <Link class="navbar-brand" to='/'>Abhilash</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavState}>
                        {
                            !nav ?
                                <GiHamburgerMenu
                                    style={{ "color": "#f2ab00" }}
                                    size={30}
                                    className="hamburger"
                                /> :
                                <CgClose
                                    style={{ "color": "#f2ab00" }}
                                    size={35}
                                    className="hamburger"
                                />
                        }
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                links.map(({ id, link, url }) => (
                                    <li class="nav-item" key={id}>
                                        <Link class="nav-link active"
                                            to={url}
                                            onClick={handleNavbar}    
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
