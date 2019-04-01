import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea/TextArea';
class App extends Component {

  componentDidMount() {
    const sencences = [
      { text: 'this is lorem ipsum', positionNumber: 0 },
      { text: 'some other text', positionNumber: 1 },
    ];
    const activeSentence = sencences[0];
    this.setState({
      sencences,
      activeSentence,
    });
  }

  render() {
    return (
      <div className="App">
      <TextArea activeSentence={this.state && this.state.activeSentence} />
      </div>
    );
  }
}

export default App;
