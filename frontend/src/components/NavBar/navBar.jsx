import React from 'react';
import { Link } from 'react-router-dom';
import Clock from "../Clock/clock";

function navBar() {
    const navStyle = {
        color: '#97CC04',
        textDecoration: 'none'
    };

    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid text-center">
                <ul class="navbar-nav me-auto">
                    <Clock/>
                </ul>
            </div>
            <div class="container-fluid text-center">
                <ul class="navbar-nav ms-auto">
                    <Link style={navStyle} to='/'>
                        <li className="nav-item px-2">Home</li>
                    </Link>
                    <Link style={navStyle} to='/about'>
                        <li className="nav-item px-2">About</li>
                    </Link>
                    <Link style={navStyle} to='/songsuggestion'>
                        <li className="nav-item px-2">Suggest a Song</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default navBar