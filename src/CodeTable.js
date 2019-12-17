import React from 'react';
import './CodeTable.css';

export default function CodeTable({ currentStep, styles, updateStyles, updateCurrentStep }) {
    let elfStyles = styles[currentStep].default
    let elfStylePropNames = Object.keys(elfStyles)
    return (
        <div className="CodeTable">
            <div className="headers">
                <h1>Code Table</h1>
                <h2>Now let's create my {currentStep}!</h2>
            </div>

            <div className="render-code">
                <h3 className="code-wrap">.{currentStep} &#123;</h3>
                {
                    elfStylePropNames.map((stylePropName, i) =>
                        <p key={i}>
                            {stylePropName}:
                            <input className={stylePropName} onChange={(event) => updateStyles(event.target.className, event.target.value)} onLoad={input.value = ""} placeholder={elfStyles[stylePropName]} type='text' />;
                        </p>
                    )
                }

                <h3 className="code-wrap">&#125;</h3>
            </div>

            <button onClick={() => updateCurrentStep(currentStep, 'back')} className="back btn btn-2 btn-2g">Back</button>
            <button onClick={() => updateCurrentStep(currentStep, 'next')} className="next btn btn-2 btn-2g">Next</button>
        </div >
    )
}

