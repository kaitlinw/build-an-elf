import React from 'react';
import './Checkpoint.css';
import Snowfall from 'react-snowfall';

export default function HowToPlay() {

    return (
        <div>
            <div className="snow">
                <Snowfall />
            </div>
            <div className="how-to-play">
                <h1>How to play!</h1>
                <p>Fill in the boxes with the suggested code! Feel free to mix and match different colours! Or... go wild and create something crazy!</p>
            </div >
        </div>
    )


}