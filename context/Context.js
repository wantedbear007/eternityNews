import React, {createContext, useState} from 'react';
import {useColorScheme} from 'react-native';

const Context = createContext();

export function ContextContainer({children}) {
  const [darkTheme, setDarkTheme] = useState(false);

  const themeHandler = value => {
    setDarkTheme(value => !value);
  };

  

  return (
    <Context.Provider value={{themeHandler, darkTheme}}>
      {children}
    </Context.Provider>
  );
}

export default Context;
