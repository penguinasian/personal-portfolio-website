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
                <button onClick={() => { setShowHamburgerMenu((prev) => !prev) }}>
                    <ReorderIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    )
}

export default Navbar