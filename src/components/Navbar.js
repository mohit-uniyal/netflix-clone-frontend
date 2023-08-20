import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [show, setShow]=useState(false);

    function handleScroll(){
        window.addEventListener('scroll', ()=>{
            if(window.scrollY>100){
                setShow(true);
            }else{
                setShow(false);
            }
        })
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
  return (
    <nav className={`navbar ${show ? "show" : ""}`}>
        <img className='navbar-img' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
        <img className='navbar-img' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
    </nav>
  )
}

export default Navbar