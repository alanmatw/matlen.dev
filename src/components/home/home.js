import React from 'react';
import './home.css'

export default class homeFn extends React.Component {

    constructor() {

        super();
        this.state = {
            email: ''
        }
    }

    fn1 = () => {

    }

    render() {        
        return (
            <div className='homeWrapper'>                
                <div className='navWrapper'>
                    <div className='nav-flex-wrapper'>
                        <div className='nav-cmd'></div>
                        <p className='nav-msg'>Welcome to matlen.dev_</p>
                    </div>
                </div>
                <div className='webBodyWrapper'>

                    <div className='webBodyLeft'>
                        <div className='wBL-h-wrapper'>
                            <p className='wBL-p1'>Hi</p>
                            <div className='wBL-h-tree'></div>
                        </div>
                        <p className='wBL-p2'>I am</p>
                        <p className='wBL-p3'>Alan</p>
                        <div className='wBL-line'></div>
                        {/*
                        <div className='wBL-logo-wrapper'>
                            <div className='wBL-git-logo'></div>
                            <div className='wBL-linkedin-logo'></div>
                        </div>
                        */}
                    </div>

                    <div className='webBodyRight'>

                        <div className='wBR-container'>
                            {/*<div className='wBR-photo'></div>*/}
                            <p className='wBR-p1'>
                                I am a web developer, specialized in MERN stack. Currently, I live in Kitchener, 
                                Ontario. Orginally I'm from Kerala, India. I love reading books in my spare time. My favorite book is 'The Lies of Locke Lamora'
                                by Scott Lynch.
                            </p>
                            <p className='wBR-p1'>
                                <span className='wBR-bold'>Projects:</span><br></br>
                                <span className='wBR-bold'>Zode: </span>I handled the front-end part of Zode using React.js. Zode is a platform where all developers can interact and plan their 
                                projects more efficiently and affordably. Some of the features include: group video calling, instant messaging, calendar integration, 
                                project tracking, organizing tasks using boards, etc<br></br>
                                GitHub Link: <span className='wBR-green'>https://github.com/alanmatw/zod-frontend</span>
                                <br></br><br></br>

                                <span className='wBR-bold'>CliqServe: </span>I developed the front-end part of CliqServe (Github Repository Name: codename-prox), using Vue.js. 
                                This project is based on an idea to deliver professional services to people at the comfort of their home.<br></br> 
                                GitHub Link: <span className='wBR-green'>https://github.com/alanmatw/codename-prox</span>                             
                            </p>
                            <p className='wBR-p1'>
                                <span className='wBR-bold'>Contact Details:</span><br></br>Email: <span className='wBR-green'>alanmatw@gmail.com</span><br></br>Phone: <span className='wBR-green'>+1 647-928-3049</span>
                                <br></br>GitHub: <span className='wBR-green'>https://github.com/alanmatw</span><br></br>linkedin: <span className='wBR-green'>https://www.linkedin.com/in/alanmatw/</span>
                            </p>
                        </div>
                        <div className='wBR-copyright'>
                            <p>&copy;matlen.dev</p>
                        </div>

                        {/*
                        <div className='wBR-svg'></div>                        
                        */}


                    </div>
                </div>
            </div>
        );
    }
}