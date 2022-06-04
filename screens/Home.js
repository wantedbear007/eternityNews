import React from 'react';
import { View } from 'react-native';
import Card from '../components/UI/Card';
import TopHeader from '../components/Home/TopHeader';
// import Contents from '../components/Home/Contents';
import DailyRead from '../components/Home/DailyRead';
import Theme from '../assets/UI/Theme';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import SkeletonHome from '../components/Home/SkeletonHome';

const Home = ({navigation}) => {
  const colors = Theme();
  return (
    <Card>
      <TopHeader colors={colors} />
     {/* <SkeletonHome /> */}
      <DailyRead navigation={navigation} colors={colors} />
      {/* <Contents navigation={navigation} /> */}
    </Card>
  );
};

export default Home;
