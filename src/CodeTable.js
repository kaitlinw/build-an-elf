import React from 'react';
import './CodeTable.css';
import toHtmlDashCase from './helpers.js';

export default function CodeTable({ currentStep, styles, updateStyles, updateCurrentStep }) {

    let elfStyles = styles[currentStep].default
    let elfStylesActual = styles[currentStep].actual
    let elfStylePropNames = Object.keys(elfStyles)
    let elfStyleProps = elfStylePropNames.map(style => toHtmlDashCase(style))
    return (
        <div className="CodeTable">
            <div className="headers">
                <h1>Code Table</h1>
                <h2>Now let's create my {currentStep}!</h2>
            </div>

            <div className="render-code">
                <h3 className="code-wrap">.{currentStep} &#123;</h3>
                {
                    elfStyleProps.map((stylePropName, i) =>
                        <p key={i}>
                            {stylePropName}:
                            <input className={stylePropName} onChange={(event) => updateStyles(event.target.className, event.target.value)} placeholder={elfStyles[stylePropName]}
                                value={elfStylesActual[stylePropName]} type='text' />;
                        </p>
                    )
                }

                <h3 className="code-wrap">&#125;</h3>
            </div>

            <button onClick={() => updateCurrentStep(currentStep, -1)} className="back btn btn-2 btn-2g">Back</button>
            <button onClick={() => updateCurrentStep(currentStep, 1)} className="next btn btn-2 btn-2g">Next</button>
        </div >
    )
}

