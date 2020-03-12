import React from 'react';

import Header from './sections/Header';
import Intro from './sections/Intro';
import Color from './sections/Color';
import Typography from './sections/Typography';

const App = () => {
  return <>
    <Header />
    <main>
      <Intro />
      <Color />
      <Typography />
    </main>
  </>;
};

export default App;
