import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

// https://api.nasa.gov/planetary/apod?api_key=0XVfgvwJDjzYEUxQPrsFA0UGtcR6YWA96MHbk6Im

const NasaSection = ({colors}) => {
  // const colors = Theme();
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=0XVfgvwJDjzYEUxQPrsFA0UGtcR6YWA96MHbk6Im',
    ).then(response => response.json().then(response => setNasaData(response)));
  }, []);

  const sourceHandler = () => {
    Linking.openURL('https://apod.nasa.gov/apod/astropix.html');
  };

  return (
    <>
      <Text style={[styles.heading, {color: colors.text}]}>
        NASA Astronomy Picture of the Day.
      </Text>
      <View
        style={[
          styles.parentContainer,
          {backgroundColor: colors.cardBackground},
        ]}>
        <Text style={[styles.title, {color: colors.text}]}>
          {nasaData.title} !
        </Text>
        <Image source={{uri: nasaData.url}} style={styles.image} />
        <Text style={[styles.description, {color: colors.disabledText}]}>
          {nasaData.explanation}
        </Text>
        <View style={styles.creditsContainer}>
          <Text style={[styles.source, {color: colors.disabledText}]}>
            Author: {nasaData.copyright}
          </Text>
          <TouchableOpacity onPress={sourceHandler}>
            <Text style={[styles.source, {color: colors.disabledText}]}>
              Source: NASA
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.date, {color: colors.disabledText}]}>
          Date: {nasaData.date}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 100,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 30,
    marginBottom: 15,
  },
  date: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
  },
  creditsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  author: {
    fontWeight: '600',
  },
  source: {
    marginTop: 10,
    fontWeight: '600',
  },
});

export default NasaSection;
