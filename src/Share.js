import React from 'react';
import './Share.css';

export default function Share({ updateCurrentStep }) {

    return (
        <div className="share">
            <h1>Share your elf!</h1>
            <div className="buttons">
                <button onClick={() => updateCurrentStep(-1)} className="back btn btn-2 btn-2g">Back</button>
                <button onClick={() => updateCurrentStep(1)} className="next btn btn-2 btn-2g">Next</button>
            </div>
        </div>
    )


}