import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import colors from '../assets/UI/colors';
import Theme from '../assets/UI/Theme';
import Context from '../context/Context';
import Card from '../components/UI/Card';
import TopHeader from '../components/Home/TopHeader';

const Home = ({navigation}) => {
  const {themeHandler} = useContext(Context);
  const colors = Theme();
  return (
    <Card>
      <TopHeader navigation={navigation} />
      <Button title="theme" onPress={() => themeHandler(true)} />
    </Card>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 60,
    fontFamily: 'JosefinSans-Bold',
  },
});

export default Home;
