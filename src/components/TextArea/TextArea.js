import React, { Component } from 'react';
import './TextArea.css';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      edited: false,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (
        props.activeSentence &&
        !state.edited &&
        props.activeSentence.text !== state.currentText
    ) {
      return { currentText: props.activeSentence.text }
    }
    return null;
  }

  changeCurrentText(e) {
    const { value } = e.currentTarget;
    const { edited } = this.state;
    if (!edited) {
      this.setState({ edited: true });
    }
    this.setState({ currentText: value })
  }

  render() {
    const text = this.state.currentText;
    return (
      <div className="textArea-container">
        <textarea
          rows="10"
          cols="150"
          name="text"
          className="TextArea"
          value={text}
          onChange={this.changeCurrentText.bind(this)}
        />

      </div>
    );
  }
}

export default TextArea;
