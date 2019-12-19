import React from 'react';
import Elf from './Elf.js';
import CodeTable from './CodeTable.js';
import './App.css';
import { styleData, steps, cardData } from './GameData.js'
import { cloneDeep } from 'lodash';
import CheckPoint from './Checkpoint.js';
import Completed from './Completed.js';
import Card from './BuildCard.js';
import Share from './Share.js';
import Home from './Home.js';
import HowToPlay from './HowToPlay.js';
import About from './About.js';
import BuildMode from './BuildMode.js';
import toHtmlDashCase from './helpers.js';
import { Switch, Route, Link } from 'react-router-dom';
import * as pathToRegexp from 'path-to-regexp';


class App extends React.Component {
  state = {}

  render() {

    return (
      <div className="App">

        <Route path='/home' exact component={Home} />

        <Route path='/build' exact component={BuildMode} />

        <Route path='/completed' exact component={Completed} />

        <Route path='/card' exact component={Card} />

        <Route path='/share' exact component={Share} />

        <Route path='/instructions' exact component={HowToPlay} />

        <Route path='/about' exact component={About} />

      </div>
    )
  }
}

export default App;
