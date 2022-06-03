import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const TopNav = ({navigation, colors}) => {
  return (
    <TouchableOpacity
      style={{marginLeft: 10, marginVertical: 15}}
      onPress={() => navigation.navigate('BottomNav')}>
      <Ionicons name="arrow-back" size={30} color={colors.text} />
    </TouchableOpacity>
  );
};

export default TopNav;
