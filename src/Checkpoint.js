import React from 'react';
import './Checkpoint.css';
import { steps } from './styleData.js';

export default function CheckPoint({ stepIndex, elfStyles, updateCurrentStep }) {

    let currentStep = steps[stepIndex]
    console.log("look here 1")
    console.log(elfStyles)
    console.log("look here 2")

    return (
        <div className="check-point">
            <h1>{elfStyles[currentStep].exclamation}</h1>
            <h2>{elfStyles[currentStep].message}</h2>
            <p>{elfStyles[currentStep].nextStepMessage}</p>

            <button onClick={() => updateCurrentStep(stepIndex, -1)} className="back btn btn-2 btn-2g">Back</button>

            <button onClick={() => updateCurrentStep(stepIndex, 1)} className="next btn btn-2 btn-2g">Next</button>
        </div>
    )



}
