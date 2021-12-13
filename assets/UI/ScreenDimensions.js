import {Dimensions} from 'react-native';

const ScreenDimensions = {
  width: Math.round(Dimensions.get('window').width),
  height: Math.round(Dimensions.get('window').height),
};

export default ScreenDimensions;
