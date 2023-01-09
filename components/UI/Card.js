import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Theme from '../../assets/UI/Theme';

const Card = ({children, statusBarColor}) => {
  const colors = Theme();
  return (
    <SafeAreaProvider style={{backgroundColor: colors.background, flex: 1}}>
      <StatusBar
        backgroundColor={
          statusBarColor ? statusBarColor : colors.cardBackground
        }
        barStyle={colors.darkOn ? 'default' : 'dark-content'}
      />
      {children}
    </SafeAreaProvider>
  );
};

export default Card;
