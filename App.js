import React from 'react';
import Navigator from './navigation/Navigator';
import {ContextContainer} from './context/Context';

const App = () => (
  <ContextContainer>
    <Navigator />
  </ContextContainer>
);

export default App;
