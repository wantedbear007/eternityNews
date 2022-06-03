import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Theme from '../../assets/UI/Theme';
// import Context from '../../context/Context';

const Card = ({children}) => {
  // const {darkTheme} = useContext(Context);
  const colors = Theme();
  return (
    <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={colors.darkOn ? 'default' : 'dark-content'}
      />
      {children}
    </SafeAreaView>
  );
};

export default Card;
