import React from 'react';
import './Checkpoint.css';

export default function CheckPoint({ currentStep, updateCurrentStep }) {

    return (
        <div className="check-point">
            <h1>Check point!</h1>
            <h2>Hooray! </h2>
            <button onClick={() => updateCurrentStep(currentStep, -1)} className="back btn btn-2 btn-2g">Back</button>
            <button onClick={() => updateCurrentStep(currentStep, 1)} className="next btn btn-2 btn-2g">Next</button>
        </div>
    )



}
