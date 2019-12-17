import React from 'react';
import Elf from './Elf.js';
import CodeTable from './CodeTable.js';
import './App.css';
import StyleData from './StyleData.js'
import { cloneDeep } from 'lodash';

class App extends React.Component {
  state = {
    currentStep: 'head',
    elfStyles: StyleData
  }

  componentDidUpdate() {
    this.saveToLocalStorage(this.state.elfStyles)
  }

  saveToLocalStorage = (elfStyles) => {
    const newStyles = JSON.stringify(elfStyles)
    localStorage.setItem('elfStyle', newStyles)
  }
  getFromLocalStorage = () => {
    const stringData = localStorage.getItem('elfStyle')
    if (stringData) {
      const elfStyles = JSON.parse(stringData)
      this.setState({ elfStyles: elfStyles })
    }
  }

  toHtmlDashCase = (string) => {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  }



  updateElfStyles = (targetStyle, inputValue) => {
    let { currentStep, elfStyles } = cloneDeep(this.state)
    elfStyles[currentStep].actual[targetStyle] = inputValue

    this.setState({ elfStyles })
  }

  updateCurrentStep = (currentStep, direction) => {
    var steps = ['head', 'eye', 'pupil', 'nose', 'mouth', 'body', 'belt', 'buckle', 'leg', 'feet', 'arm', 'left-arm', 'right-arm', 'hand', 'hair', 'hat-head', 'pom-pom', 'hat-band']
    if (direction === 'next') {
      currentStep = steps[steps.indexOf(currentStep) + 1] || currentStep
      console.log("next")

    } else if (direction === 'back') {
      currentStep = steps[steps.indexOf(currentStep) - 1] || currentStep
      console.log("back")
    }

    this.setState({ currentStep })

  }

  render() {
    const { currentStep, elfStyles } = this.state
    return (
      <div className="App">
        <Elf
          className="Elf"
          styles={elfStyles}
          currentStep={currentStep}
        />
        <CodeTable
          currentStep={currentStep}
          styles={elfStyles}
          updateStyles={this.updateElfStyles}
          updateCurrentStep={this.updateCurrentStep}
        />
      </div>
    );
  }
}

export default App;
