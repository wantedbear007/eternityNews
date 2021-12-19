import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Card from '../components/UI/Card'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../assets/UI/Theme';
import CryptoSection from '../components/Explore/CryptoSection';
import QuoteSection from '../components/Explore/QuoteSection';

const Explore = () => {
  const colors = Theme()


  return (
    <Card>
    <View style={styles.parentContainer}>
    <View style={styles.topContainer}>
      <MaterialIcons name='explore' size={45} color={colors.text} />
      <Text style={[styles.headingText, {color: colors.text}]}>Explore</Text>
    </View> 
    </View>
    <CryptoSection />
    <QuoteSection />
    </Card>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 30,
    marginLeft: 5,
    fontFamily: 'JosefinSans-SemiBold',
  },
})

export default Explore;
