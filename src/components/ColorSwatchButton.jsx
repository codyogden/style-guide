import React, { Component } from 'react';

import styles from './ColorSwatchButton.scss';

export default class ColorSwatchButton extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  handleClick() {
    window.getSelection().selectAllChildren(this.myRef.current);
    document.execCommand('copy');
  }
  render() {
    return <button className={styles.colorSwatchButton} ref={this.myRef} onClick={() => this.handleClick()}>{this.props.copyText}</button>
  }
}
