import React from 'react';
import Navigator from './navigation/Navigator';
import {ContextContainer} from './context/Context';

const App = () => {
 
  return (
    <ContextContainer>
      {/* <InfoPage /> */}
      <Navigator />
    </ContextContainer>
  );
};

export default App;
