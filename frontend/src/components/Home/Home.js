import React, { Component } from 'react';
import Clock from '../Clock/clock';
import GitLogo from '../../assets/GitHub-Mark-Light-120px-plus.png'
import LinkedInLogo from '../../assets/LI-In-Bug.png'
import NavBar from '../NavBar/navBar'
import me from '../../assets/me.JPG';
import './Home.css'

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        document.title = "Brandon Cai | Home";
    }
    
    render() {
        return (     
        <>
        <NavBar />    
          <div className ="container-fluid">

            <div className = "container-fluid text-center">
                <img className="img-fluid rounded-circle" src={me} alt='me' />
            </div>
            <div className="container-fluid text-center my-4">
                <p className = "h1" style={{paddingBottom: 20}}>
                    Hi there, I'm Brandon. Thanks for stopping by!
                </p>
            </div>
      
            <div className="flex-container">
                <div className="flex-child">
                    <div className="contact-bar">
                            <a
                                className="contact-bar"
                                href="https://www.linkedin.com/in/brandon-cai-00b935190/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={LinkedInLogo} height="100px"/>
                            </a>
                            <a
                                className="contact-bar"
                                href="https://github.com/brcai415"
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                <img src={GitLogo} height="100px" />
                            </a>
                        </div>
                </div>
            </div>
          </div>
        </>
        );
    }
}