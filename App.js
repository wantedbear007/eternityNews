import React from 'react';
import Navigator from './navigation/Navigator';
import {ContextContainer} from './context/Context';
import InfoPage from './screens/InfoPage';
const App = () => (
  <ContextContainer>
  {/* <InfoPage /> */}
    <Navigator />
  </ContextContainer>
);

export default App;
