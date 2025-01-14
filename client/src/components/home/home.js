import React, { useState } from 'react';
import Song from '../song/song';
import './home.css'
import axios from 'axios';

function Home() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ name, email, comment });

        try {
            await axios.post('http://localhost:5000/api/contact', {
                name: name,
                email: email,
                comment: comment
            });
            alert('Message sent successfully!');
            setName('');
            setEmail('');
            setComment('');
        } catch (error) {
            console.error('There was an error sending the message!', error);
            alert('There was an error sending your message. Please try again.');
        }        

    };
  
    return (
        
        <div className='homeWrapper'>                
            
            <div className='navWrapper'>
                
                <div className='nav-grid'> 
                    <div className='nav-left'>
                        <p className='nav-msg'>
                            <span>alan&gt;_ Welcome to matlen.dev</span>
                            <span className='blinking-cursor'>|</span>
                        </p>
                    </div>

                    <div className='nav-song'>
                        <Song />
                    </div>
                </div>

            </div>

            <div className='webBodyWrapper'>

                <div className='webBodyLeft'>
                    
                    <div className='wBL-container'>
                        <div className='wBL-h-wrapper'>
                            <p className='wBL-p1'>Hi</p>
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
                            <p className='wBR-s1-p1'>About Me</p>
                            <p className='wBR-s1-p2'>
                                Software engineer with a strong programming background. I'm always curious, keen on problem-solving, 
                                and enjoy challenging environments. Skilled in various programming languages. Done projects in web development 
                                using MEVN and MERN stack. My hobbies include visiting new places and playing computer games.
                            </p>
                        </div>
                        
                        <div>
                            <p className='wBR-s1-p1'>Skills</p>
                            <p className='wBR-s1-p2'>
                                I am skilled at Javascript, C, C++, Java, ASP.NET, SQL. In the case of web development I follow MERN stack (MongoDB, Express.js, React.js, Node.js).
                                I am also enthusiastic about ethical hacking and network security, and working on to enhance those skills.
                            </p>
                        </div>

                        <div>
                            <p className='wBR-s1-p1'>Projects</p>
                            <p className='wBR-s1-p2'>
                                <span className='project-name'>EarthyFashion</span> Collaboratively built a comprehensive e-commerce platform to sell sustainable products online. Consisted of dashboards for admins, sellers, and customers. 
                                Developed using React.js for the front end and ASP.NET for the back end. Led front-end development.<br></br>
                            </p>                                
                            <p className='wBR-s1-p2'>
                                <span className='project-name'>Zode</span> I handled the front-end part of Zode using React.js. Zode is a platform where all developers can interact and plan their 
                                projects more efficiently and affordably. Some of the features include: group video calling, instant messaging, calendar integration, 
                                project tracking, organizing tasks using boards, etc<br></br>
                                GitHub Link: <a href='https://github.com/alanmatw/zod-frontend' id='wBR-underline'><span className='wBR-white'>https://github.com/alanmatw/zod-frontend</span></a>
                            </p>
                            <p className='wBR-s1-p2'>
                                <span className='project-name'>CliqServe</span> I developed the front-end part of CliqServe (Github Repository Name: codename-prox), using Vue.js. 
                                This project is based on an idea to deliver professional services to people at the comfort of their home.<br></br>
                                GitHub Link: <a href='https://github.com/alanmatw/codename-prox' id='wBR-underline'><span className='wBR-white'>https://github.com/alanmatw/codename-prox</span></a>                                     
                            </p>
                        
                        </div>
{/*
                        <div>
                            <p className='wBR-s1-p1'>Get in Touch</p>

                            <div className='wBR-c-rect'>
                                <form className='wBR-contact-form' onSubmit={handleSubmit}>
                                    <input
                                        className='form-item'
                                        type='text'
                                        name='name'
                                        placeholder='Enter Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <br />
                                    <input
                                        className='form-item'
                                        type='email'
                                        name='email'
                                        placeholder='Enter Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <br />
                                    <textarea
                                        className=''
                                        name='comment'
                                        placeholder='Enter Comment'
                                        rows='4'
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        required
                                    ></textarea>
                                    <br />
                                    <button type='submit' className='form-btn'>Send</button>
                                </form>
                            </div>
                        </div>
*/}
                    </div>

                    <div className='wBR-copyright'>
                        <p>&copy;matlen.dev</p>
                    </div>

                    <div>
                        
                    </div>

                </div>
            </div>
        </div>        
    ); 
  } 
  
  export default Home;