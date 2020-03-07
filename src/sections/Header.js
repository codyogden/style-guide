import React from 'react';

import styles from './Header.scss';

const Header = () => {
  return <header>
    <h1 id="header" className={styles.title}>
      <span>Style Guide</span>
      <span className={styles.author}>by Cody Ogden</span>
    </h1>
  </header>;
};

export default Header;
