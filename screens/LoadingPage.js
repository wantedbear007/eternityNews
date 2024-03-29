import React from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Card from '../components/UI/Card';
import Theme from '../assets/UI/Theme';

const LoadingPage = ({navigation}) => {
  const colors = Theme();

  const getStoredData = async () => {
    try {
      const fetchedName = await AsyncStorage.getItem('username');
      if (fetchedName !== null) {
        navigation.replace('BottomNav');
      } else {
        navigation.replace('InfoPage');
      }
    } catch (e) {}
  };

  React.useEffect(() => {
    getStoredData();
  }, []);

  return (
    <Card>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: colors.cardBackground,
        }}>
        <Image source={require("../assets/Images/appLogo.png")}/>
        {/* <Text style={{fontSize: 30, color: colors.text}}>
          Eternity News
        </Text> */}
      </View>
    </Card>
  );
};

export default LoadingPage;
