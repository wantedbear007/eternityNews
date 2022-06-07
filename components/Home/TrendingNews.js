import {StyleSheet, Text, View, FlatList, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TrendingNewsRender from './TrendingNewsRender';
import SkeletonHome from './SkeletonHome';
import AsyncStorage from '@react-native-community/async-storage';

const TrendingNews = ({colors, navigation}) => {
  const [newsEnd, setNewsEnd] = useState(false);
  const [news, setNews] = useState([]);
  const [newsQuantity, setNewsQuantity] = useState(10);
  const [loading, setLoading] = useState(true);

  const storeData = async val => {
    try {
      const jsonVal = JSON.stringify(val);
      await AsyncStorage.setItem('trendingNews', jsonVal);
    } catch (e) {
      console.log(e);
    }
  };

  const getStoredData = async () => {
    try {
      const fetchedNewsData = await AsyncStorage.getItem('trendingNews');
      const fetchedJSON = JSON.parse(fetchedNewsData);
      setLoading(false);
      setNews(fetchedJSON);
    } catch (e) {
      console.log(e);
    }
  };

  //Fetching News
  useEffect(() => {
    getStoredData();
    try {
      axios
        .get(
          `https://inshortsv2.vercel.app/news?type=top_stories&limit=${newsQuantity}`,
        )
        .then(response => {
          setNews(response.data.articles);
          storeData(response.data.articles);
          setLoading(false);
        });
    } catch (e) {}
  }, [newsQuantity]);

  // FlatLost Render
  const renderItems = ({item}) =>
    loading ? (
      <SkeletonHome />
    ) : (
      <TrendingNewsRender colors={colors} item={item} navigation={navigation} />
    );

  // Infinite Scrolling
  const infiniteScrolling = () => {
    if (newsQuantity >= 30) {
      setNewsEnd(true);
      ToastAndroid.show('No more news', ToastAndroid.SHORT);
    } else {
      setNewsQuantity(newsQuantity + 5);
    }
  };

  return (
    <View style={styles.trendingContainer}>
      <Text
        style={[
          {
            color: colors.accent,
            textAlign: 'center',
            marginBottom: 10,
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
    marginBottom: 10,
  },
});

export default TrendingNews;
