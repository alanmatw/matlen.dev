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

                </div>
                <div className='webBodyWrapper'>

                    <div className='webBodyLeft'>
                        <div className='wBL-container'>
                            <p className='wBL-p1'>Hi</p>
                            <div className='wBL-smiley' ></div>
                        </div>
                        <p className='wBL-p2'>I'm Alan.</p>
                        <p>Email: alanmatw@gmail.com</p>
                        <p>Mobile Number: +1-647-928-3049</p>
                        <p>Location: Kitchener, Canada</p>
                        <div className='wBL-logo-wrapper'>
                            <div className='wBL-git-logo'></div>
                            <div className='wBL-linkedin-logo'></div>
                        </div>
                    </div>

                    <div className='webBodyRight'>
                        <p className='wBR-p1'>
                            I am a web developer, specialized in MERN stack. Currently, I live in Kitchener, 
                            Ontario. Orginally I'm from Kerala, India. I love reading books in my spare time. I favorite book is 'The Lies of Locke Lamora'
                            by Scott Lynch.
                        </p>

                        <div className='wBR-svg'></div>
                        <div className='wBR-copyright'>
                            <p>&copy;matlen.dev</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}