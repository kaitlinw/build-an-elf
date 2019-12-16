import React from 'react';
import Elf from './Elf.js';
import CodeTable from './CodeTable.js';
import './App.css';
import StyleData from './StyleData.js'

class App extends React.Component {
  state = {
    currentPage: 'head',
    style: {
      StyleData
    }
  }

  updateStyles = (style) => {
    this.setState({ style })
  }

  render() {
    const { currentPage, style } = this.state
    return (
      <div className="App">
        <Elf className="Elf" />
        <CodeTable
          currentPage={currentPage}
          style={style}
        />
      </div>
    );
  }
}

export default App;
