import React from 'react';

import styles from './Header.scss';

const Header = () => {
  return <header>
    <h1 id="header" className={styles.title}>
      <span className={styles.author}>Cody Ogden's</span>
      <span>Style Guide</span>
    </h1>
  </header>;
};

export default Header;
