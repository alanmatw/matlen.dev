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
                        <p className='wBL-p1'>Hi.</p>
                        <p className='wBL-p2'>I'm Alan.</p>
                    </div>

                    <div className='webBodyRight'>
                        <p className='wBR-p1'>
                            <span className='wBR-p1-span'>I</span> live in Kitchener, Ontario. I'm an international student at Conestoga College, Waterloo, where I'm pursuing
                            a Graduate Certificate course called Computer Applications Development. I'm originally from a place called Kottayam in 
                            Kerala, India. I worked as an Assistant System Engineer in a company called Tata Consultancy Services. My hobbies are 
                            reading, playing computer games, and coding. I love coding. I'm pretty skillful at Node.js, Express.js, and React.js. 
                            I also like to spend my leisure time reading books. My favorite book is 'The lies of Locke Lamora' by Scott Lynch.
                        </p>

                        <div className='wBR-svg'></div>
                    </div>
                </div>
            </div>
        );
    }
}