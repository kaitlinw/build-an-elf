import React from 'react';
import Elf from './Elf.js';
import CodeTable from './CodeTable.js';
import './App.css';
import StyleData from './StyleData.js'
import { cloneDeep } from 'lodash';
import CheckPoint from './Checkpoint.js';
import Completed from './Completed.js';
import Card from './Card.js';
import Share from './Share.js';
import Home from './Home.js';

import { Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    currentStep: 'head',
    elfStyles: StyleData
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

  toHtmlDashCase = (string) => {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  }

  updateElfStyles = (targetStyle, inputValue) => {
    let { currentStep, elfStyles } = cloneDeep(this.state)
    elfStyles[currentStep].actual[targetStyle] = inputValue

    this.setState({ elfStyles })
  }

  updateCurrentStep = (currentStep, direction) => {
    var steps = ['home', 'head', 'checkpoint', 'eye', 'pupil', 'nose', 'mouth', 'checkpoint', 'body', 'belt', 'buckle', 'checkpoint', 'leg', 'feet', 'checkpoint', 'arm', 'left-arm', 'right-arm', 'hand', 'checkpoint', 'hair', 'hat-head', 'pom-pom', 'hat-band', 'completed', 'card', 'share']
    if (direction === 'next') {
      currentStep = steps[steps.indexOf(currentStep) + 1] || currentStep
      console.log("next")

    } else if (direction === 'back') {
      currentStep = steps[steps.indexOf(currentStep) - 1] || currentStep
      console.log("back")
    }
    this.setState({ currentStep })
  }

  showHome = (currentStep) => {

  }





  render() {
    const { currentStep, elfStyles } = this.state

    return (
      <div className="App">

        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/build" exact>

          <div className="container">
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

        </Route>

        <Route path="/checkpoint">
          <CheckPoint />
        </Route>

        <Route path="/completed">
          <Completed />
        </Route>

        <Route path="/card">
          <Card />
        </Route>

        <Route path="/share">
          <Share />
        </Route>

      </div>
    )
  }
}

export default App;
