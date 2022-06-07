import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, ToastAndroid} from 'react-native';
import axios from 'axios';
import DailyReadRender from './DailyReadRender';
import TrendingNews from './TrendingNews';
import AsyncStorage from '@react-native-community/async-storage';
import SkeletonHome from './SkeletonHome';

const DailyRead = ({navigation, colors}) => {
  const [newsQuantity, setNewsQuantity] = useState(15);
  const [news, setNews] = useState([]);
  const [newsEnd, setNewsEnd] = useState(false);
  const [loading, setLoading] = useState(true);

  const storeData = async val => {
    try {
      const jsonVal = JSON.stringify(val);
      await AsyncStorage.setItem('newsData', jsonVal);
    } catch (e) {}
  };

  const getStoredData = async () => {
    try {
      const fetchedNewsData = await AsyncStorage.getItem('newsData');
      const fetchedJSON = JSON.parse(fetchedNewsData);
      setNews(fetchedJSON);
      setLoading(false);
    } catch (e) {}
  };

  useEffect(() => {
    getStoredData();
    try {
      axios
        .get(
          `https://inshortsv2.vercel.app/news?type=all_news&limit=${newsQuantity}`,
        )
        .then(response => {
          setNews(response.data.articles);
          storeData(response.data.articles);
          setLoading(false);
        });
    } catch (error) {}
  }, [newsQuantity]);

  const renderItems = ({item}) => {
    if (loading) {
      return <SkeletonHome />;
    } else {
      return (
        <DailyReadRender colors={colors} item={item} navigation={navigation} />
      );
    }
  };

  // Infinite Scrolling
  const infiniteScrolling = () => {
    if (newsQuantity >= 250) {
      ToastAndroid.show('No more news', ToastAndroid.SHORT);
      setNewsEnd(true);
    } else {
      setNewsQuantity(newsQuantity + 15);
    }
  };

  return (
    <View style={styles.compactContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItems}
        onEndReached={infiniteScrolling}
        ListHeaderComponent={
          <TrendingNews colors={colors} navigation={navigation} />
        }
        ListFooterComponent={!newsEnd && <SkeletonHome />}
        legacyImplementation={false}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default DailyRead;

const styles = StyleSheet.create({
  compactContainer: {
    marginHorizontal: 10,
  },
});
