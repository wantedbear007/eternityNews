import React from 'react';
import {View, ScrollView} from 'react-native';

import Card from '../components/UI/Card';
import TopHeader from '../components/Home/TopHeader';
import TrendingNews from '../components/Home/TrendingNews';
import TodaysRead from '../components/Home/TodaysRead';
import Contents from '../components/Home/Contents';

const Home = ({navigation}) => {
  return (
    <Card>
      <TopHeader navigation={navigation} />
      <Contents />
        {/* <View> */}
        {/* <ScrollView> */}
          {/* <TrendingNews /> */}
          {/* <TodaysRead /> */}
          {/* </ScrollView> */}
        {/* </View> */}
    </Card>
  );
};

export default Home;
