import '../Home/Home.css'
import React, { Component } from 'react';
import NavBar from '../NavBar/navBar';
import './about.css';

const Education = <div className="Education">
    <h3><span style={{color: "#003DA5"}}>University of California,</span> <span style={{color: "#ffb81c"}}>Riverside</span></h3>
        <ul>
            <li>B.S. Computer Science with Business Applications</li>
            <li><b>Computer Science Undergraduate Courses</b>: Software Construction, Logic Design, Data
Structures & Algorithms, Design of Operating Systems, Computer Security, Database Management
Systems, Unix System Administration, Discrete Structures, Design & Architecture of Computer
Systems, Introduction to Big Data, Principles of Programming Languages</li>
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
    
const Skills = <div className = "Skills">
            <ul style={{listStyle: 'None'}}>
                <li><span style={{fontWeight: "bold"}}>Languages: </span>Python, C++, Java, JavaScript, SQL</li>
                <li><span style={{fontWeight: "bold"}}>Frameworks: </span>React, HTML/CSS</li> 
                <li><span style={{fontWeight: "bold"}}>Tools: </span>Git, Postman, IBM Watson, Google Dialogflow</li>  
            </ul>
        </div>

class About_viewport extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(        
            <div className = "Viewport">
                <div className="About-Me">
                    <h1 style={{textAlign:'center'}}>About Me</h1>
                </div>
                <div>
                    <h2 style={{textAlign: 'center'}}><u>Education</u></h2>
                        { Education }
                    <h2 style={{textAlign: 'center'}}><u>Work Experience</u></h2>
                        { Work_Experience }
                    <h2 style={{textAlign: 'center'}}><u>Skills</u></h2>
                        { Skills }
                </div>
             </div>
        );
    }
}
export default class About extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        document.title = "Brandon Cai | About"
    }
    componentWillUnmount() {
        clearTimeout(this.intervalID);
    }
    render() {
        return (
            <>
                <NavBar />
                <About_viewport />
            </>
        );
    }
}
