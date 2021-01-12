import React from 'react';
import './Checkpoint.css';
import { steps } from './styleData.js';

export default function CheckPoint({ stepIndex, elfStyles, updateCurrentStep }) {

    let currentStep = steps[stepIndex]
    console.log(elfStyles)

    return (
        <div className="check-point">
            <h1>{elfStyles[currentStep].exclamation}</h1>
            <h2>{elfStyles[currentStep].message}</h2>
            <p>{elfStyles[currentStep].nextStepMessage}</p>
            <div className="buttons">
                <button onClick={() => updateCurrentStep(-1)} className="back btn btn-2 btn-2g">Back</button>
                <button onClick={() => updateCurrentStep(1)} className="next btn btn-2 btn-2g">Next</button>
            </div>
        </div>
    )



}
