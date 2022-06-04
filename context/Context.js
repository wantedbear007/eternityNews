import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Appearance } from 'react-native';

const Context = createContext();

export function ContextContainer({children}) {
  const [darkTheme, setDarkTheme] = useState(false);
  const systemTheme = Appearance.getColorScheme()
  useEffect(() => {
    const getData = async () => {
      try {
        const darkMode = await AsyncStorage.getItem('theme');
        if (darkMode == 'true') {
          setDarkTheme(true);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const storeData = async () => {
      try {
        const jsonVal = JSON.stringify(darkTheme);
        await AsyncStorage.setItem('theme', jsonVal);
      } catch (e) {
        console.log(e);
      }
    };

    storeData();
  }, [darkTheme]);

  const themeHandler = value => {
    setDarkTheme(value => !value);
  };

  return (
    <Context.Provider value={{darkTheme, themeHandler}}>
      {children}
    </Context.Provider>
  );
}

export default Context;
