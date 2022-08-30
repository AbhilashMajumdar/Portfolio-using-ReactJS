import React, { useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';


const Arrow = () => {

    useEffect(() => {
        // window.addEventListener('scroll', () => {
        //     if (window.pageYOffset > 80) {
        //         document.getElementById('arrowBtn').style.display = "block";
        //     } else if (window.pageYOffset < 80) {
        //         document.getElementById('arrowBtn').style.display = "none";
        //     }
        // })
        document.getElementById('arrowBtn').style.display = "none";
    }, [])

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 80) {
            document.getElementById('arrowBtn').style.display = "block";
        } else if (window.pageYOffset < 80) {
            document.getElementById('arrowBtn').style.display = "none";
        }
    })

    return (
        <>
            <div className="arrow" id="arrowBtn">
                <Link to='Portfolio' smooth duration={500}><button><FaArrowUp size={20} /></button></Link>
            </div>
        </>
    )
}

export default Arrow