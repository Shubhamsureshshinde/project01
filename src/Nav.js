import React, { useState, useEffect } from 'react'
import './Nav.css'
import logo from './netflix-logo-removebg-preview.png'
import { useNavigate } from 'react-router-dom';



function Nav() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();

    const transistionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transistionNavBar)
        return () => window.removeEventListener('scroll', transistionNavBar)
    }, [])


    return (

        <div className={`nav ${show && 'nav_black'} `}>
            <div className='nav__contents'>
                <img
                    onClick={() => navigate('/', { replace: true })}
                    className='nav_logo'
                    src={logo} alt='logo'>
                </img>
                <img
                    onClick={() => navigate('/profile', { replace: true })}
                    className='nav_avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='nav'></img>
            </div>
        </div >
    )
}

export default Nav