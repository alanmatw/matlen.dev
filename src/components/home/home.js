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
                        
                        <div className='wBL-container'>
                            <div className='wBL-h-wrapper'>
                                <p className='wBL-p1'>Hi.</p>
                                <div className='wBL-h-tree'></div>
                            </div>
                            <p className='wBL-p2'>I am</p>
                            <p className='wBL-p3'>Alan</p>
                        
                            <div className='wBL-contacts'>
                                <div className='wBL-mail-logo'></div>
                                <p className='wBL-mail'>alanmatw@gmail.com</p>
                            </div>

                            <div className='wBL-num-wrapper'>
                                <div className='wBL-number-logo'></div>
                                <p className='wBL-number'>+1 (647)928-3049</p>
                            </div>

                            <div className='wBL-logo-wrapper'>
                                <a href='https://github.com/alanmatw'><div className='wBL-git-logo'></div></a>
                                <a href='https://www.linkedin.com/in/alanmatw/'><div className='wBL-linkedin-logo'></div></a>
                                <a href='https://www.instagram.com/alanmatw/'><div className='wBL-instagram-logo'></div></a>
                            </div>                        

                        </div>
                        
                    </div>

                    <div className='webBodyRight'>

                        <div className='wBR-container'>
                           
                           <div>
                                <p className='wBR-s1-p1'>About Me.</p>
                                <p className='wBR-s1-p2'>
                                    I am a web developer, specialized in MERN stack. Currently, I live in Kitchener, 
                                    Ontario. Orginally I'm from Kerala, India. I love reading books and playing PC games. My favorite book is 'The Lies of Locke Lamora'
                                    by Scott Lynch, and my favorite game is 'Assasins Creed'.
                                </p>
                           </div>
                           
                           <div>
                                <p className='wBR-s1-p1'>Skills.</p>
                                <p className='wBR-s1-p2'>
                                    As a programmer, I am skilled at Python, C, C++, Javascript. In the case of web development I follow MERN stack (MongoDB, Express.js, React.js, Node.js).
                                     I am also enthusiastic about ethical hacking and network security, and working on to enhance those skills.
                                </p>
                           </div>

                            <div>
                                <p className='wBR-s1-p1'>Projects.</p>
                                <p className='wBR-s1-p2'>
                                    Zode: I handled the front-end part of Zode using React.js. Zode is a platform where all developers can interact and plan their 
                                    projects more efficiently and affordably. Some of the features include: group video calling, instant messaging, calendar integration, 
                                    project tracking, organizing tasks using boards, etc<br></br>
                                    GitHub Link: <a href='https://github.com/alanmatw/zod-frontend' id='wBR-underline'><span className='wBR-white'>https://github.com/alanmatw/zod-frontend</span></a>
                                </p>
                                <p className='wBR-s1-p2'>
                                    CliqServe: I developed the front-end part of CliqServe (Github Repository Name: codename-prox), using Vue.js. 
                                    This project is based on an idea to deliver professional services to people at the comfort of their home.<br></br>
                                    GitHub Link: <a href='https://github.com/alanmatw/codename-prox' id='wBR-underline'><span className='wBR-white'>https://github.com/alanmatw/codename-prox</span></a>                                     
                                </p>
                            </div>
                            
                            
                            
                            {/*<p className='wBR-p1'>
                                <span className='wBR-bold-qw'>Projects:</span><br></br>
                                <span className='wBR-bold'>Zode: </span>I handled the front-end part of Zode using React.js. Zode is a platform where all developers can interact and plan their 
                                projects more efficiently and affordably. Some of the features include: group video calling, instant messaging, calendar integration, 
                                project tracking, organizing tasks using boards, etc<br></br>
                                GitHub Link: <a href='https://github.com/alanmatw/zod-frontend' id='wBR-underline'><span className='wBR-green'>https://github.com/alanmatw/zod-frontend</span></a>
                                <br></br><br></br>

                                <span className='wBR-bold'>CliqServe: </span>I developed the front-end part of CliqServe (Github Repository Name: codename-prox), using Vue.js. 
                                This project is based on an idea to deliver professional services to people at the comfort of their home.<br></br> 
                                GitHub Link: <a href='https://github.com/alanmatw/codename-prox' id='wBR-underline'><span className='wBR-green'>https://github.com/alanmatw/codename-prox</span></a>                             
                            </p>*/}

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