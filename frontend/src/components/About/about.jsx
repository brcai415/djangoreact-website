import '../Home/Home.css'
import React, { Component } from 'react';
import NavBar from '../NavBar/navBar';
import './about.css';

const Education = <div className="Education">
    <h4 className = "multicolortext">University of California, Riverside</h4>
        <ul>
            <li>Bachelors of Science</li>
            <li>Computer Science and Business Applications</li>
        </ul>
    </div>

const Work_Experience = <div className = "Work-Experience">
        <h3 style={{textAlign: 'left'}}>Joinedapp - <em>Palo Alto, CA</em></h3>
            <h5>Implementation Software Engineer Intern</h5>
                <ul>
                    <li>Spearheaded product onboarding for over 15 domestic and international enterprise clientele
                        including Xcaret, Estée Lauder, and Unilever using REST APIs
                    </li>
                    <li>Implemented 10+ front facing Facebook Messenger and WhatsApp chatbots with creative
                        branding and responses to match client brand identity
                    </li>
                    <li>
                    Collaborated with engineering in refining and designing platform features such as handling
                    unrecognized requests to chatbots in order to improve chatbot responses and user experiences
                    </li>
                    <li>
                    Facilitated integration of Shopify, Stripe, and Square platforms for client product and payment
                    methods
                    </li>
                    <li>
                    Reduced individual client onboarding time by applying Python Scripts to parse client information
                    </li>
                    <li>
                    Wrote and maintained product documentation and user guides for both internal and external use
                    </li>
                </ul>
        </div>
    
export default class About extends Component {
    componentDidMount() {
        document.title = "Brandon Cai | About"
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className = "Viewport">
                    <div className="About-Me">
                        <h1 style={{textAlign:'center'}}>About Me</h1>
                    </div>
                    <div>
                            <h2 style={{textAlign: 'center'}}><u>Education</u></h2>
                                { Education }
                            <h2 style={{textAlign: 'center'}}><u>Work Experience</u></h2>
                                { Work_Experience }
                    </div>
                </div>
            </React.Fragment>

        );
    }
}