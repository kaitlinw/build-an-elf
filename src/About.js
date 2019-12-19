import React from 'react';
import './Checkpoint.css';
import Snowfall from 'react-snowfall';

export default function About() {

    return (
        <div>
            <div className="snow">
                <Snowfall />
            </div>
            <div className="how-to-play">
                <h1>About this game!</h1>
                <p>Made with &hearts; by <a id="to-p" href="https://www.linkedin.com/in/kaitlinjanewalsh/">KW</a></p>
            </div>
        </div>
    )


}