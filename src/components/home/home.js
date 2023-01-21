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
                <p>Hi, My Name is Alan.</p>
            </div>
        );
    }
}