import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native';
import IconRender from '../UI/IconRender';
import Icons from '../../assets/UI/Icons';

const NasaSection = ({colors, nasaData}) => {
  const {shareButton} = Icons();
  // Destructure incoming nasaData

  const ShareButtonHandler = () => {
    Share.share({
      message:
        'Nasa astronomy picture of the day: ' +
        ' https://apod.nasa.gov/apod/astropix.html',
    });
  };
  // const colors = Theme();
  // const [nasaData, setNasaData] = useState([]);

  // useEffect(() => {
  //   try {
  //     fetch(
  //       'https://api.nasa.gov/planetary/apod?api_key=0XVfgvwJDjzYEUxQPrsFA0UGtcR6YWA96MHbk6Im',
  //     ).then(response =>
  //       response.json().then(response => setNasaData(response)),
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  const sourceHandler = () => {
    Linking.openURL('https://apod.nasa.gov/apod/astropix.html');
  };

  return (
    <>
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
        <View style={styles.footer}>
          <Text style={[styles.date, {color: colors.disabledText}]}>
            Date: {nasaData.date}
          </Text>
          <IconRender onPress={ShareButtonHandler} icon={shareButton} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 15,
    // paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 30,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  date: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '500',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    borderRadius: 1,
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginHorizontal: 15,
  },
  description: {
    fontSize: 15,
    marginHorizontal: 15,
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
  footer: {
    alignItems: 'center',
  },
});

export default NasaSection;
