import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Theme from '../../assets/UI/Theme';

const Card = ({children}) => {
  const colors = Theme();
  return (
    <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
      {children}
    </SafeAreaView>
  );
};

export default Card;
