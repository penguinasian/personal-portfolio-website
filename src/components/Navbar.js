import React, { useEffect } from 'react';
import { useState } from 'react';
import '../styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setShowHamburgerMenu(false)
    }, [location])
    return (
        <div className="navbar" id={showHamburgerMenu ? "open" : "close"}>
            <div className="toggleButton">
                <h3>Daniel</h3>
                <button onClick={() => { setShowHamburgerMenu((prev) => !prev) }}>
                    <ReorderIcon className="hangburgerMenu"/>
                </button>
            </div>

            
            <div className="links">
                <h2>Daniel</h2>
                <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Career</Link>
                </div>
                
                
            
            </div>
        </div>
    )
}

export default Navbar