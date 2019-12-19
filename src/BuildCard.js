import React from 'react';
import './BuildCard.css';
import Elf from './Elf.js';

export default function Card({ cardData, updateCurrentStep, currentStep }) {

    return (

        <div id="capture" className="card">
            <h2>Lets make the Christmas Card!</h2>

            {/* <Elf /> */}

            <div className="card-message">
                <h1>Merry Christmas!</h1>
                <p>&lt;h1&gt;Dear {<input placeholder="Recipients Name" type="text" />},&lt;/h1&gt;</p>
                <p>&lt;p&gt;Check out what I made!&lt;/p&gt;</p>
                <p>&lt;p&gt;{<input className="large-input" placeholder="Your message here" type="text" />}&lt;/p&gt;</p>
                <p>&lt;h3&gt;From {<input placeholder="Your name here" type="text" />}, and {<input placeholder="Your elf's name here" type="text" />} the elf. xoxo&lt;/h3&gt;</p>
            </div>
            <button onClick={() => updateCurrentStep(currentStep, -1)} className="back btn btn-2 btn-2g">Back</button>
            <button onClick={() => updateCurrentStep(currentStep, 1)} className="next btn btn-2 btn-2g">Next</button>
        </div >


    )




}