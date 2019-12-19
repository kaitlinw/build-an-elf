import React from 'react';
import './CodeTable.css';
import toHtmlDashCase from './helpers.js';
import { steps } from './styleData';
import CheckPoint from './Checkpoint';

export default function CodeTable({ stepIndex, updateStyles, elfStyles, updateCurrentStep }) {
    const currentStep = steps[stepIndex]
    let stepStyles = elfStyles[currentStep] // || elfStyles[steps[stepIndex - 1]]

    let defaultStyles = stepStyles.default
    let actualStyles = stepStyles.actual

    const styleNamesCamelCase = Object.keys(defaultStyles)
    let styleNamesDashCase = styleNamesCamelCase.map(style => toHtmlDashCase(style))
    return (
        <div className="CodeTable">
            <div className="headers">
                <h1>Code Table</h1>
                <h2>Now let's create my {currentStep}!</h2>
            </div>

            <div className="render-code">
                <h3 className="code-wrap">.{currentStep} &#123;</h3>
                {
                    styleNamesDashCase.map((styleName, i) =>
                        <p key={i}>
                            {styleName}:
                            <input className={styleName} onChange={(event) => updateStyles(event.target.className, event.target.value)} placeholder={defaultStyles[styleNamesCamelCase[i]]}
                                defaultValue={actualStyles[styleNamesCamelCase[i]]}
                                type='text' />;
                                
                        </p>
                    )
                }
                <h3 className="code-wrap">&#125;</h3>
                <div className="buttons">
                    <button onClick={() => updateCurrentStep(-1)} className="back btn btn-2 btn-2g">Back</button>
                    <button onClick={() => updateCurrentStep(1)} className="next btn btn-2 btn-2g">Next</button>
                </div>
            </div>
            
        </div >
    )
}

