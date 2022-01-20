import React from 'react';

import Card from '../components/UI/Card';
import TopHeader from '../components/Home/TopHeader';
import Contents from '../components/Home/Contents';
import DailyRead from '../components/Home/DailyRead';

const Home = ({navigation}) => {
  return (
    <Card>
      <TopHeader />
      <DailyRead navigation={navigation}/>
      {/* <Contents navigation={navigation} /> */}
    </Card>
  );
};

export default Home;
