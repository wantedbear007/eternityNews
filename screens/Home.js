import React from 'react';
// import { View } from 'react-native';
import Card from '../components/UI/Card';
import TopHeader from '../components/Home/TopHeader';
// import Contents from '../components/Home/Contents';
import DailyRead from '../components/Home/DailyRead';
import Theme from '../assets/UI/Theme';
// import {SvgXml} from 'react-native-svg';
// import {shareButton} from '../assets/UI/Icons';
import ShareButton from '../assets/Icons/shareButton.svg'
import CompassIcon from '../assets/Icons/compass-svgrepo-com.svg'
// import { shareButton } from '../assets/UI/Icons';
import IconRender from '../components/UI/IconRender';
// import Icons from '../assets/UI/Icons';
// import Delete from '../components/Explore/Delete';
import Icons from '../assets/UI/Icons';

const Home = ({navigation}) => {
 
  const colors = Theme();
  const icons = Icons() 
  
  return (
    <Card>
      <TopHeader colors={colors}  icons={icons} />
      {/* <IconRender>{nextButton}</IconRender> */}
      {/* <ShareButton fill={colors.disabledText} /> */}
      {/* <CompassIcon fill={colors.disabledText} /> */}
      {/* <SvgXml xml={xml} width={'100%'} height={'100%'} /> */}
      <DailyRead navigation={navigation} colors={colors} /> 
      {/* <Contents navigation={navigation} /> */}
    </Card>
  );
};

export default Home;
