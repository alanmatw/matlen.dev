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
                    <div className='nav-cmd'></div>
                </div>
                <div className='webBodyWrapper'>

                    <div className='webBodyLeft'>
                        <div className='wBL-h-wrapper'>
                            <p className='wBL-p1'>Hi</p>
                            <div className='wBL-h-bird'></div>
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

                        {/*<p className='wBR-p1'>
                            I am a web developer, specialized in MERN stack. Currently, I live in Kitchener, 
                            Ontario. Orginally I'm from Kerala, India. I love reading books in my spare time. I favorite book is 'The Lies of Locke Lamora'
                            by Scott Lynch.
                        </p>

                        <div className='wBR-svg'></div>
                        <div className='wBR-copyright'>
                            <p>&copy;matlen.dev</p>
                        </div>                        
                        
                        */}


                    </div>
                </div>
            </div>
        );
    }
}