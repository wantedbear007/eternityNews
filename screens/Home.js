import React from 'react';
import Card from '../components/UI/Card';
import TopHeader from '../components/Home/TopHeader';
import DailyRead from '../components/Home/DailyRead';
import Theme from '../assets/UI/Theme';
import Icons from '../assets/UI/Icons';
import InfoPage from './InfoPage';

const Home = ({navigation}) => {
  const colors = Theme();
  const icons = Icons();
  

  return (
    <Card>
      <TopHeader colors={colors} icons={icons} />
      <DailyRead navigation={navigation} colors={colors} />
    </Card>
  );
};

export default Home;
