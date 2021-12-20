import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from '../components/UI/Card';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../assets/UI/Theme';
import CryptoSection from '../components/Explore/CryptoSection';
import QuoteSection from '../components/Explore/QuoteSection';
import ImageSection from '../components/Explore/ImageSection';
import Greetings from '../components/Explore/Greetings';

const Explore = () => {
  const colors = Theme();
  const Greeting = Greetings();

  return (
    <Card>
      <ScrollView>
        <View style={styles.parentContainer}>
          <View style={styles.topContainer}>
            <MaterialIcons name="explore" size={45} color={colors.text} />
            <Text style={[styles.headingText, {color: colors.text}]}>
              Explore
            </Text>
          </View>
        </View>
        <Text style={[styles.greet, {color: colors.text}]}>
          {Greeting}, Bhanupratap !😄
        </Text>
        <CryptoSection />
        <QuoteSection />
        <ImageSection />
      </ScrollView>
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
  greet: {
    fontSize: 29,
    fontFamily: 'Cookie-Regular',
    marginLeft: 23,
    paddingTop: 20,
  },
});

export default Explore;
