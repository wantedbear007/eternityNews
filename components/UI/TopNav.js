import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../../assets/UI/Theme';

const TopNav = ({navigation}) => {
  const colors = Theme();
  return (
    <TouchableOpacity
      style={{marginLeft: 10, marginVertical: 15}}
      onPress={() => navigation.navigate('BottomNav')}>
      <Ionicons name="arrow-back" size={30} color={colors.text} />
    </TouchableOpacity>
  );
};

export default TopNav;
