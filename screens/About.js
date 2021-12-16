import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Theme from '../assets/UI/Theme';
import Card from '../components/UI/Card';
import ScreenDimensions from '../assets/UI/ScreenDimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const About = () => {
  const colors = Theme();

  const telegramHandler = () => {
    Linking.openURL('https://t.me/Wantedbear007');
  };

  const githubHandler = () => {
    Linking.openURL('https://github.com/wantedbear007');
  };

  return (
    <Card>
      <View style={styles.textContainer}>
        <Text style={[styles.title, {color: colors.text}]}>About</Text>
      </View>
      <View
        style={[
          styles.cardContainer,
          {backgroundColor: colors.cardBackground},
        ]}>
        <Text style={[styles.cardTitle, {color: colors.text}]}>
          About eternityNews
        </Text>
        <Text style={[styles.cardDescription, {color: colors.disabledText}]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{' '}
        </Text>
        <Text style={[styles.cardTitle, {color: colors.text, marginTop: 20}]}>
          About Development
        </Text>
        <Text style={[styles.cardDescription, {color: colors.disabledText}]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{' '}
        </Text>
      </View>
      <View
        style={[
          styles.cardContainer,
          {backgroundColor: colors.cardBackground, marginTop: 30},
        ]}>
        <View style={styles.card}>
          <View style={styles.logoContainer}>
            <Text style={[styles.version, {color: colors.disabledText}]}>
              Version: 1.0
            </Text>
            <Text style={[styles.developer, {color: colors.text}]}>
              {'</> with ❤ by Bhanupratap.'}
            </Text>
          </View>
          <TouchableOpacity onPress={telegramHandler}>
            <FontAwesome name="telegram" size={30} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity onPress={githubHandler}>
            <FontAwesome name="github" size={30} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'flex-end',
  },
  title: {
    marginRight: 20,
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 50,
    marginVertical: ScreenDimensions.height * 0.15,
    alignItems: 'flex-end',
  },
  cardContainer: {
    marginRight: 30,
    paddingVertical: 24,
    paddingHorizontal: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardDescription: {
    fontSize: 14,
  },
  logoContainer: {},
  version: {
    fontWeight: '500',
  },
  developer: {
    fontWeight: '400',
  },
});

export default About;
