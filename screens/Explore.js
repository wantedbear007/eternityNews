import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from '../components/UI/Card';
import Theme from '../assets/UI/Theme';
import CryptoSection from '../components/Explore/CryptoSection';
import QuoteSection from '../components/Explore/QuoteSection';
import ImageSection from '../components/Explore/ImageSection';
import Greetings from '../components/Explore/Greetings';
import Affirmation from '../components/Explore/Affirmation';
import JokeSection from '../components/Explore/JokeSection';
import NasaSection from '../components/Explore/NasaSection';
import SkeletonExplore from '../components/Explore/SkeletonExplore';
import IconRender from '../components/UI/IconRender';
import Icons from '../assets/UI/Icons';
import AsyncStorage from '@react-native-community/async-storage';
import ErrorScreen from '../components/UI/ErrorScreen';

const Explore = ({navigation}) => {
  const colors = Theme();
  const Greeting = Greetings();
  const {compassIcon, infoIcon} = Icons();

  const [loading, setLoading] = useState(true);
  const [nasaData, setNasaData] = useState([]);
  const [cryptoPrice, setCryptoPrices] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [affirmation, setAffirmation] = useState('');
  const [quote, setQuote] = useState({qte: 'Loading...', author: ''});
  const [jokes, setJokes] = useState([]);
  const [userName, setUserName] = useState('😀');
  const [error, setError] = useState(false);

  // Image API page Number
  let pageNumber = Math.floor(Math.random() * 200);

  const getStoredData = async () => {
    try {
      const fetchedNewsData = await AsyncStorage.getItem('username');
      setUserName(fetchedNewsData);
    } catch (e) {}
  };

  useEffect(() => {
    getStoredData();
    // NASA REQUEST
    try {
      fetch(
        'https://api.nasa.gov/planetary/apod?api_key=0XVfgvwJDjzYEUxQPrsFA0UGtcR6YWA96MHbk6Im',
      )
        .then(response =>
          response.json().then(response => setNasaData(response)),
        )
        .catch(err => {});
    } catch (err) {}
    // IMAGE REQUEST
    const url = 'https://picsum.photos/v2/list?page=' + pageNumber + '&limit=5';
    try {
      fetch(url)
        .then(response => response.json())
        .then(data => setImageData(data))
        .catch(err => {});
    } catch (err) {}

    // AFFIRMATION REQUEST
    try {
      fetch('https://www.affirmations.dev/')
        .then(response => response.json())
        .then(data => setAffirmation(data.affirmation))
        .catch(err => {});
    } catch (error) {}

    // CRYPTO REQUEST
    try {
      fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=2&page=1&sparkline=false&price_change_percentage=7d',
      ).then(response =>
        response
          .json()
          .then(response => setCryptoPrices(response))
          .catch(err => {}),
      );
    } catch (error) {}
    GetQuotes();
    GetJokes();
  }, []);

  // QUOTE REQUEST
  const GetQuotes = () => {
    try {
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          setQuote({qte: data.content, author: data.author}).catch(err => {});
        });
    } catch (err) {}
  };

  // JOKES REQUEST
  const GetJokes = () => {
    try {
      fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(response => response.json())
        .then(data => setJokes(data))
        .catch(err => {});
    } catch (err) {}
  };

  useEffect(() => {
    if (
      imageData.length != 0 &&
      nasaData &&
      cryptoPrice &&
      affirmation &&
      jokes &&
      quote
    ) {
      setError(false);
      setLoading(false);
    } else setError(true);
  }, [imageData, nasaData, cryptoPrice, affirmation]);

  const SectionDivider = () => (
    <View style={[styles.divider, {backgroundColor: colors.text}]} />
  );
  // NAVIGATION FUNCTION
  const NavigateAboutPage = () => {
    navigation.navigate('About');
  };
  const RenderContent = () => {
    return (
      <>
        <CryptoSection cryptoPrice={cryptoPrice} />
        <QuoteSection colors={colors} quote={quote} getQuotes={GetQuotes} />
        <ImageSection colors={colors} imageData={imageData} />
        <SectionDivider />
        <Affirmation colors={colors} affirmation={affirmation} />
        <SectionDivider />
        <JokeSection colors={colors} getJokes={GetJokes} jokes={jokes} />
        <NasaSection colors={colors} nasaData={nasaData} />
      </>
    );
  };

  return (
    <Card>
      <View
        style={[{backgroundColor: colors.cardBackground, paddingBottom: 5}]}>
        <View style={styles.parentContainer}>
          <View style={styles.topContainer}>
            <IconRender opacity={true} icon={compassIcon} />
            <Text style={[styles.headingText, {color: colors.text}]}>
              Explore
            </Text>
          </View>
          <IconRender
            icon={infoIcon}
            style={{marginRight: 10}}
            onPress={NavigateAboutPage}
          />
        </View>
      </View>
      <ScrollView>
        <Text style={[styles.greet, {color: colors.text}]}>
          {Greeting} {userName} !
        </Text>
        {!error ? (
          <View>{loading ? <SkeletonExplore /> : <RenderContent />}</View>
        ) : (
          <ErrorScreen colors={colors} btnVisibility={false} />
        )}
      </ScrollView>
      {/* </View> */}
    </Card>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 31,
    marginLeft: 5,
    fontWeight: '800',
  },
  greet: {
    fontSize: 20,
    marginLeft: 23,
    paddingTop: 20,
    // textAlign: 'center',
    fontWeight: '600',

    // letterSpacing: 1.2,
    fontStyle: 'italic',
  },
  divider: {
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

export default Explore;
