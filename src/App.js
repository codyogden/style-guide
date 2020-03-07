import React from 'react';

import Header from './sections/Header';
import Intro from './sections/Intro';
import Color from './sections/Color';

const App = () => {
  return <>
    <Header />
    <main>
      <Intro />
      <Color />
    </main>
  </>;
};

export default App;
