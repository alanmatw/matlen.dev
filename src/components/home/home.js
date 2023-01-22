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