import React, { Component } from 'react';

import styles from './FontSpecimen.scss';

export default class FontSpecimen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      slug,
      fontName,
      FontDescription,
      fontClass,
      specimens,
    } = this.props;
    return (
      <>
        <h3 className={[styles.title, fontClass].join(' ')}>{fontName}</h3>
        <FontDescription />
        <div className={[styles.specimenGroup, fontClass].join(' ')}>
          {specimens.map((specimen,index) => <div key={slug + specimen + index} className={styles.character}>{specimen}</div>)}
      </div>
      </>
    );
  }
};
