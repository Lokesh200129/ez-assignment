import React from 'react'
import { useState } from 'react';
import vfilmsLogo from '../assets/hero/vfilmsLogo.svg'
import { Link, useLocation } from 'react-router-dom';
import hamburger from '../assets/navbar/hamburger.svg'
import letsTalk from '../assets/navbar/letsTalk.svg'
import closeHamburger from '../assets/navbar/closeHamburger.svg'
const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    return (
        <header className='fixed top-0 left-0 w-full flex justify-between items-center h-[103px] px-4 sm:px-8 z-50'>
            <Link to="/">
                <img src={vfilmsLogo} alt="Logo" className={`h-12 w-[124px] ${isHomePage ? 'opacity-0' : 'opacity-100'}`} />
            </Link>
            {isMenuVisible ? <nav className=" flex  items-center justify-center p-8">
                <ul className="flex  items-center justify-center  gap-5 text-lg  " style={{ fontFamily: "Instrument Sans" }}>
                    <li><Link to="/services" >Services</Link></li>
                    <li><Link to="/portfolio">Their Stories</Link></li>
                    <li><Link to="/about" >Our Story</Link></li>
                    <li><Link to="/" >Varnan</Link></li>
                    <li><Link to="/contact" ><img src={letsTalk} alt="Let's Talk" className="" /></Link></li>
                    <li><img src={closeHamburger} alt="X" onClick={toggleMenu} className="h-6" /></li>
                </ul>
            </nav> : <div onClick={toggleMenu} className="cursor-pointer">
                <img src={hamburger} alt="hamburger" className="h-14" />
            </div>
            }
        </header>
    )
}

export default Navbar