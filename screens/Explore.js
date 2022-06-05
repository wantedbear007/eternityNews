import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from '../components/UI/Card';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../assets/UI/Theme';
import CryptoSection from '../components/Explore/CryptoSection';
import QuoteSection from '../components/Explore/QuoteSection';
import ImageSection from '../components/Explore/ImageSection';
import Greetings from '../components/Explore/Greetings';
import Affirmation from '../components/Explore/Affirmation';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import JokeSection from '../components/Explore/JokeSection';
import NasaSection from '../components/Explore/NasaSection';
import SkeletonExplore from '../components/Explore/SkeletonExplore';
import IconRender from '../components/UI/IconRender';
import Icons from '../assets/UI/Icons';
import CryptoPrices from '../services/CryptoPrices';

const Explore = () => {
  const [loading, setLoading] = useState(true);
  const colors = Theme();
  const Greeting = Greetings();
  const {compassIcon} = Icons();

  useEffect(() => {
    window.setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [nasaData, setNasaData] = useState([]);
  const [cryptoPrice, setCryptoPrices] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [affirmation, setAffirmation] = useState('');

  // Image API page Number
  let pageNumber = Math.floor(Math.random() * 200);

  useEffect(() => {
    // NASA REQUEST
    try {
      fetch(
        'https://api.nasa.gov/planetary/apod?api_key=0XVfgvwJDjzYEUxQPrsFA0UGtcR6YWA96MHbk6Im',
      ).then(response =>
        response.json().then(response => setNasaData(response)),
      );
    } catch (err) {
      console.log(err);
    }
    // IMAGE REQUEST
    const url = 'https://picsum.photos/v2/list?page=' + pageNumber + '&limit=5';
    try {
      fetch(url)
        .then(response => response.json())
        .then(data => setImageData(data));
    } catch (err) {}

    // AFFIRMATION REQUEST
    try {
      fetch('https://www.affirmations.dev/')
        .then(response => response.json())
        .then(data => setAffirmation(data.affirmation));
    } catch (error) {}

    // CRYPTO REQUEST
    const fetchPrices = async () => {
      const prices = await CryptoPrices();
      setCryptoPrices(prices);
    };
    fetchPrices();
  }, []);

  const SectionDivider = () => (
    <Divider style={[styles.divider, {backgroundColor: colors.text}]} />
  );

  const RenderContent = () => {
    return (
      <>
        <CryptoSection cryptoPrice={cryptoPrice} />
        <QuoteSection colors={colors} />
        <ImageSection colors={colors} imageData={imageData} />
        <SectionDivider />
        <Affirmation colors={colors} affirmation={affirmation} />
        <SectionDivider />
        <JokeSection colors={colors} />
        {/* <SectionDivider /> */}
        {/* <WordSection /> */}
        {/* <SectionDivider /> */}
        <NasaSection colors={colors} nasaData={nasaData} />
      </>
    );
  };
  return (
    <Card>
      <ScrollView>
        <View style={styles.parentContainer}>
          <View style={styles.topContainer}>
            {/* <MaterialIcons name="explore" size={30} color={colors.text} /> */}
            <IconRender opacity={true} icon={compassIcon} />
            <Text style={[styles.headingText, {color: colors.text}]}>
              Explore
            </Text>
          </View>
        </View>
        <Text style={[styles.greet, {color: colors.text}]}>{Greeting} !</Text>
        {loading ? <SkeletonExplore /> : <RenderContent />}
        {/* <RenderContent /> */}
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
    fontSize: 25,
    marginLeft: 5,
    fontWeight: '800',
  },
  greet: {
    fontSize: 20,
    marginLeft: 23,
    paddingTop: 20,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  divider: {
    marginVertical: 20,
    marginHorizontal: 40,
  },
});

export default Explore;
