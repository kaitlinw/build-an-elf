import React from 'react';
import './Completed.css';

export default function Completed({ updateCurrentStep }) {


    return (
        <div className="completed-elf">
            <h1>Hooray Your Elf is complete!</h1>
            <div className="buttons">
                <button onClick={() => updateCurrentStep(-1)} className="back btn btn-2 btn-2g">Back</button>
                <button onClick={() => updateCurrentStep(1)} className="next btn btn-2 btn-2g">Next</button>
            </div>
        </div>
    )






}