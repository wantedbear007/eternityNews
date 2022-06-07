import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const IconRender = ({onPress, opacity, icon, style}) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      activeOpacity={!opacity ? 0.4 : 1}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconRender;
