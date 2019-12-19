import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Home from './Home.js';
import HowToPlay from './HowToPlay.js';
import About from './About.js';
import BuildMode from './BuildMode.js';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { styleData, steps, cardData } from './styleData.js';
import { cloneDeep } from 'lodash';
import Completed from './Completed.js';
import Share from './Share.js';
import Card from './BuildCard.js';


class App extends React.Component {

  state = {
    elfStyles: styleData,
    stepIndex: 0
  }

  // componentDidMount() {
  //   this
  //     .getFromLocalStorage()
  //     .then(data => {
  //       console.log(data)
  //       this.setState(data)
  //     })
  // }

  // componentDidUpdate() {
  //   let { stepIndex, elfStyles } = this.state
  //   this.saveToLocalStorage({ stepIndex, elfStyles })
  // }

  // saveToLocalStorage = async (data) => {
  //   console.log('save to local storage')
  //   const newStyles = JSON.stringify(data)
  //   localStorage.setItem('elfStyles', newStyles)
  // }

  // getFromLocalStorage = async () => {
  //   const stringData = localStorage.getItem('elfStyles')
  //   if (stringData) {
  //     const data = JSON.parse(stringData)
  //     return data;
  //   }
  //   return { elfStyles: styleData, stepIndex: 0 }
  // }

  // removeFromLocalStorage = () => {
  //   localStorage.removeItem('elfStyle')
  //   this.resetToStepZero()
  //   return console.log("reset to step zero")
  // }

  updateElfStyles = (targetStyle, inputValue) => {
    let { stepIndex, elfStyles } = cloneDeep(this.state)
    const currentStep = steps[stepIndex]
    elfStyles[currentStep].actual[targetStyle] = inputValue
    this.setState({ elfStyles })
  }

  updateCurrentStep = (direction) => {
    const { stepIndex } = this.state
    let nextStepIndex = stepIndex + direction
    nextStepIndex = nextStepIndex || stepIndex

    this.setState({ stepIndex: nextStepIndex })
  }

  resetToStepZero = () => {
    this.setState({ stepIndex: 0 })
  }

  render() {
    const { elfStyles, stepIndex } = this.state
    return (
      <div className="App">
        <NavBar />
        {/* <NavBar removeFromLocalStorage={this.removeFromLocalStorage} /> */}
        <Route path='/' exact render={() =>
          <Redirect to='/home' />
        } />


        <Route path='/home' exact render={() =>
          <Home
          // removeFromLocalStorage={this.removeFromLocalStorage}
          />
        } />


        <Route path='/build' exact render={() =>
          <BuildMode
            elfStyles={elfStyles}
            stepIndex={stepIndex}
            updateElfStyles={this.updateElfStyles}
            updateCurrentStep={this.updateCurrentStep}
          />
        } />

        <Route path='/instructions' exact component={HowToPlay} />

        <Route path='/about' exact component={About} />
        <Route path='/completed' exact component={Completed} />
        <Route path='/share' exact component={Share} />
        <Route path='/card' exact component={Card} />

      </div>
    )
  }
}

export default App;
