import React, {useContext} from 'react';
import Context from '../../context/Context';

const Theme = () => {
  const {themeHandler, darkTheme} = useContext(Context);

  colorsScheme = {
    background: darkTheme ? '#000' : '#fff',
    cardBackground: darkTheme ? '#1B1B1E' : '#F1F1F1',
    text: darkTheme ? '#FFFFFF' : '#000000',
    disabledText: darkTheme ? '#A7A7A7' : '#6B5E5E',
    accent: darkTheme ? '#af42ae' : '#D00000',
  };

  return colorsScheme;
};

export default Theme;
