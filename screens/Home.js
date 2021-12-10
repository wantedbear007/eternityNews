import React from 'react';
import {View, ScrollView} from 'react-native';

import Card from '../components/UI/Card';
import TopHeader from '../components/Home/TopHeader';
import TrendingNews from '../components/Home/TrendingNews';
import TodaysRead from '../components/Home/TodaysRead';

const Home = ({navigation}) => {
  return (
    <Card>
      <TopHeader navigation={navigation} />
      <ScrollView>
        <View>
          <TrendingNews />
          <TodaysRead />
        </View>
      </ScrollView>
    </Card>
  );
};

export default Home;
