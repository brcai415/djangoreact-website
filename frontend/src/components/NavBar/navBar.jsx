import React from 'react';
import { Link } from 'react-router-dom';
import Clock from "../Clock/clock";
import './navBar.css';
function navBar() {
    const navStyle = {
        fontSize: '16pt',
        color: '#ffc428',
        textDecoration: 'none'
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="container-fluid text-left ">
                    <span><Clock/></span>
                </div> 
                <ul className="navbar-nav text-right">
                    <Link style={navStyle} to='/'>
                        <span style={{padding: '.25em'}}><button className="btn btn-primary btn-outline-primary-*">🏠Home</button></span>
                    </Link>
                    <Link style={navStyle} to='/about'>
                        <span style={{padding: '.25em'}}><button className="btn btn-primary btn-outline-primary-*">👨‍💻About</button></span>
                    </Link>
                    {/* <Link style={navStyle} to='/songsuggestion'>
                        <li className="nav-item px-2">Suggest a Song</li>
                    </Link> */}
                </ul>
            </div>
        </nav>
    )
}

export default navBar