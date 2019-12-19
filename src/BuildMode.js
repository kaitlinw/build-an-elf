import React from 'react';
import './BuildMode.css';
import { styleData, steps, cardData } from './styleData.js';
import Elf from './Elf.js';
import CheckPoint from './Checkpoint.js';
import CodeTable from './CodeTable.js';
import Completed from './Completed.js';
import Card from './BuildCard.js';
import Share from './Share.js';
import { Switch, Route, Link } from 'react-router-dom';


function BuildMode({ stepIndex, elfStyles, updateElfStyles, updateCurrentStep }) {
    let currentStep = steps[stepIndex]

    if (currentStep.includes('checkpoint')) {
        return (
            <div className="container">
                <Elf
                    elfStyles={elfStyles}

                />
                <CheckPoint
                    stepIndex={stepIndex}
                    updateCurrentStep={updateCurrentStep}
                    elfStyles={elfStyles}
                />

            </div>

        )
    }

    if (currentStep === 'completed-elf') {
        return (
            <div className="container">
                <Elf
                    className="Elf"
                    styles={elfStyles}
                />
                <Completed
                    updateCurrentStep={this.updateCurrentStep}
                />

            </div>
        )
    } else if (currentStep === 'card') {
        return (
            <div className="container">
                <Elf
                    className="Elf"
                    styles={elfStyles}
                />
                <Card
                    updateCurrentStep={this.updateCurrentStep}
                />

            </div>

        )
    } else if (currentStep === 'share') {
        return (
            <div className="container">
                <Elf
                    className="Elf"
                    styles={elfStyles}
                />
                <Share
                    stepIndex={stepIndex}
                    updateCurrentStep={this.updateCurrentStep}
                />

            </div>
        )
    }
    return (
        <div className="container">
            <Elf
                elfStyles={elfStyles}
            />
            <CodeTable
                stepIndex={stepIndex}
                updateStyles={updateElfStyles}
                updateCurrentStep={updateCurrentStep}
                elfStyles={elfStyles}
            />

        </div>
    )
}

export default BuildMode;

