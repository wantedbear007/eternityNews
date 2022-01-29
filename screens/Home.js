import React from 'react';

import Card from '../components/UI/Card';
import TopHeader from '../components/Home/TopHeader';
import Contents from '../components/Home/Contents';
import DailyRead from '../components/Home/DailyRead';
import Theme from '../assets/UI/Theme';

const Home = ({navigation}) => {
  const colors = Theme()
  return (
    <Card>
      
      <TopHeader />
      <DailyRead navigation={navigation}/>
      {/* <Contents navigation={navigation} /> */}
    </Card>
  );
};

export default Home;
