import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';


const IconRender = ({onPress, children, opacity, icon, width}, props) => {
  return <TouchableOpacity onPress={onPress} activeOpacity={!opacity ? 0.4 : 1} >{icon}</TouchableOpacity>;
};

export default IconRender;
