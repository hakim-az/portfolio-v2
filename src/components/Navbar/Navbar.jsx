import { useEffect, useState } from "react"
import whiteHamburger from '../../assets/images/white-hamburger.png'
import blackHamburger from '../../assets/images/black-hamburger.png'
import './Navbar.css'

const Navbar = () => {

    const [navbar, setNavbar] = useState(true);
    const [hamburger, setHamburger] = useState(true);
    
    useEffect(() => {
    window.addEventListener("scroll", () => {if (window.scrollY > 0) {setNavbar(false)}else{setNavbar(true)}})
    }, [])

    return (
        <nav className={`fixed top-0 w-full ${navbar ? "bg-gray-900" : "bg-white"}`}>
            <div className={`box-container h-20 flex items-center justify-between ${navbar ? "text-white" : "text-gray-900"}`}>
                {/* Navbar Logo */}
                <a href="#">
                    <div className="flex items-center">
                        <span className='text-2xl'>Azzaz</span>
                        <span className='w-3 h-3 rounded-full bg-green-600'></span>
                    </div>
                </a>
                {/* Navbar Hamburger */}
                <div className="cursor-pointer hidden max-[786px]:flex" onClick={() => setHamburger(!hamburger)}>
                    <img className="p-1" src={navbar ? whiteHamburger : blackHamburger} alt="hamburger-icon" /> 
                </div>
                {/* Navbar Links */}
                <ul className={`nav-links flex ${hamburger ? "max-[768px]:hidden" : "max-[768px]:flex"} ${navbar ? "max-[768px]:bg-gray-900" : "max-[768px]:bg-white"}`} >
                    <li onClick={() => setHamburger(true)}><a href="#services">Services</a></li>
                    <li onClick={() => setHamburger(true)}><a href="#about">About</a></li>
                    <li onClick={() => setHamburger(true)}><a href="#projects">Projects</a></li>
                    <li onClick={() => setHamburger(true)}><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar