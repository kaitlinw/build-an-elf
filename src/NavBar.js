import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
export default function NavBar({ removeFromLocalStorage }) {
    return (
        <div className="nav-bar">
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to='/build'>Start</Link>
                    </li>
                    <li>
                        <Link to="/instructions">How To Play</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

// onClick = {() => removeFromLocalStorage()}