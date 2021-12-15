import '../Home/Home.css'
import React, { Component } from 'react';
import NavBar from '../NavBar/navBar';
import Clock from '../Clock/clock'
import { Nav } from 'reactstrap';

export default class About extends Component {
    componentDidMount() {
        document.title = "Brandon Cai | About"
    }
    
    render() {
        const listStyle = {
            listStyle: 'none'
        }
        return (
            <div className="container-fluid">
                <NavBar/>
                <h1 className = "text-center">About Me</h1>
                <div className = "container-fluid">
                    <div>
                        <p className="education">
                            <h2><u>Education</u></h2>
                            <dl style={listStyle}>
                                <li>University of California, Riverside</li>
                                <li>Bachelors of Science</li>
                                <li>Computer Science and Business Applications</li>
                            </dl>
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}