import React from 'react';
import {View, ScrollView} from 'react-native';

import Card from '../components/UI/Card';
import TopHeader from '../components/Home/TopHeader';
import Contents from '../components/Home/Contents';

const Home = ({navigation}) => {
  return (
    <Card>
      <TopHeader/>
      <Contents navigation={navigation} />
    </Card>
  );
};

export default Home;
