import {StyleSheet, Text, View, FlatList, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TrendingNewsRender from './TrendingNewsRender';
import SkeletonHome from './SkeletonHome';
import AsyncStorage from '@react-native-community/async-storage';

const TrendingNews = ({colors, navigation, refresh}) => {
  const [newsEnd, setNewsEnd] = useState(false);
  const [news, setNews] = useState([]);
  const [newsQuantity, setNewsQuantity] = useState(10);
  const [loading, setLoading] = useState(true);
  const [offSet, setOffSet] = useState(0);

  const storeData = async val => {
    try {
      const jsonVal = JSON.stringify(val);
      await AsyncStorage.setItem('trendingNews', jsonVal);
    } catch (e) {}
  };

  const getStoredData = async () => {
    try {
      const fetchedNewsData = await AsyncStorage.getItem('trendingNews');
      const fetchedJSON = JSON.parse(fetchedNewsData);
      setLoading(false);
      setNews(fetchedJSON);
    } catch (e) {}
  };

  // Fetch Data
  async function fetchData() {
    try {
      await axios
        .get(
          `https://inshorts.me/news/trending?offset=${offSet}&limit=${newsQuantity}`,
        )

        .then(response => {
          setNews(response.data.data.articles);
          // console.log(response);
          setLoading(false);
        })
        .catch(err => {
          if (err.response) {
            setErrorStatus(true);
          }
        });
    } catch (error) {}
  }

  useEffect(() => {
    // getStoredData();
    fetchData();
  }, [newsQuantity, refresh]);

  // FlatLost Render
  const renderItems = ({item}) =>
    loading ? (
      <SkeletonHome />
    ) : (
      <TrendingNewsRender colors={colors} item={item} navigation={navigation} />
    );

  // Infinite Scrolling
  const infiniteScrolling = () => {
    if (newsQuantity >= 130) {
      setNewsEnd(true);
      ToastAndroid.show('No more news', ToastAndroid.SHORT);
    } else {
      setOffSet(newsQuantity);
      setNewsQuantity(newsQuantity + 5);
    }
  };

  return (
    <View
      style={[styles.trendingContainer, {backgroundColor: colors.background}]}>
      <Text
        style={[
          {
            color: colors.accent,
            textAlign: 'center',
            marginVertical: 10,
            fontWeight: '500',
          },
        ]}>
        Top Stories
      </Text>
      <FlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItems}
        onEndReached={infiniteScrolling}
        ListFooterComponent={!newsEnd && <SkeletonHome />}
        legacyImplementation={false}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  trendingContainer: {
    paddingBottom: 18,
  },
});

export default TrendingNews;
