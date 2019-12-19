import React from 'react';
import './BuildCard.css';
import { styleData, steps, cardData } from './GameData.js';
import Elf from './Elf.js';
import CheckPoint from './Checkpoint.js';
import CodeTable from './CodeTable.js';
import { cloneDeep } from 'lodash';
import Completed from './Completed.js';
import Card from './BuildCard.js';
import Share from './Share.js';
import { Switch, Route, Link } from 'react-router-dom';


class BuildMode extends React.Component {
    state = {
        elfStyles: styleData,
        steps: steps,
        currentStep: steps[0]
    }

    componentDidUpdate() {
        let { currentStep, elfStyles } = this.state
        this.saveToLocalStorage({ currentStep, elfStyles })
    }

    saveToLocalStorage = (elfStyles) => {
        const newStyles = JSON.stringify(elfStyles)
        localStorage.setItem('elfStyle', newStyles)
    }

    getFromLocalStorage = () => {
        const stringData = localStorage.getItem('elfStyle')
        if (stringData) {
            const elfStyle = JSON.parse(stringData)
            this.setState({ elfStyles: elfStyle })
        }
    }

    updateElfStyles = (targetStyle, inputValue) => {
        let { currentStep, elfStyles } = cloneDeep(this.state)
        elfStyles[currentStep].actual[targetStyle] = inputValue

        this.setState({ elfStyles })
    }

    updateCurrentStep = (steps, currentStep, direction) => {
        let step = steps.indexOf(currentStep) + direction
        currentStep = steps[step] || currentStep
        this.setState({ currentStep })
    }
    render() {

        const { currentStep, elfStyles } = this.state


        if (currentStep === 'checkpoint') {
            return (
                <CheckPoint
                    currentStep={currentStep}
                    updateCurrentStep={this.updateCurrentStep}
                />
            )
        } else if (currentStep === 'completed') {
            return (
                <div className="container">
                    <Elf
                        className="Elf"
                        styles={elfStyles}
                    />
                    <Completed />
                </div>
            )
        }
        else if (currentStep === 'card') {
            return (
                <div className="container">
                    <Elf
                        className="Elf"
                        styles={elfStyles}
                    />
                    <Card
                        currentStep={currentStep}
                        updateCurrentStep={this.updateCurrentStep}
                    />
                </div>

            )
        }
        else if (currentStep === 'share') {
            return (
                <div className="container">
                    <Elf
                        className="Elf"
                        styles={elfStyles}
                    />
                    <Share />
                </div>
            )
        }



        return (
            <div className="container">
                <Elf
                    className="Elf"
                    styles={elfStyles}
                />
                <CodeTable
                    currentStep={currentStep}
                    styles={elfStyles}
                    updateStyles={this.updateElfStyles}
                    updateCurrentStep={this.updateCurrentStep}
                />
            </div>
        )
    }
}



export default BuildMode;
