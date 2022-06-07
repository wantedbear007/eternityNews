import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import Theme from '../assets/UI/Theme';
import Card from '../components/UI/Card';
import ScreenDimensions from '../assets/UI/ScreenDimensions';
import IconRender from '../components/UI/IconRender';
import Icons from '../assets/UI/Icons';

const About = () => {
  const colors = Theme();
  const {githubIcon, telegramIcon} = Icons();

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
          <View>
            <Text style={[styles.version, {color: colors.disabledText}]}>
              Version: 1.1
            </Text>
            <Text style={[styles.developer, {color: colors.text}]}>
              {'</> with ❤ by Bhanupratap.'}
            </Text>
          </View>
          <IconRender icon={telegramIcon} onPress={telegramHandler} />
          <IconRender icon={githubIcon} onPress={githubHandler} />
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
    fontSize: 50,
    marginVertical: ScreenDimensions.height * 0.15,
    alignItems: 'flex-end',
    fontWeight: "600"
  },
  cardContainer: {
    marginRight: 30,
    paddingVertical: 24,
    paddingHorizontal: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardDescription: {
    fontSize: 14,
    marginLeft: 10,
  },
  version: {
    fontWeight: '500',
  },
  developer: {
    fontWeight: '400',
  },
});

export default About;
