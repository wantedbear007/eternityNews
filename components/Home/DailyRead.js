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
  const [offSet, setOffSet] = useState(0);

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

  // trial 
  const getNews = () => {
      axios.get("https://inshorts.me/news/all?offset=0&limit=10").then(response => {console.log(response.data.data.articles)})
  }

  useEffect(() => {
    // getNews();
    getStoredData();
    try {
      axios
        .get(
          `https://inshorts.me/news/all?offset=${offSet}&limit=${newsQuantity}`,
          // `https://inshortsv2.vercel.app/news?type=all_news&limit=${newsQuantity}`,

        )
        .then(response => {
          setNews(response.data.data.articles);

          // storeData(response.data.articles);
          // setNews(response.data.articles);
          // storeData(response.data.articles);
          setLoading(false);
        });
    } catch (error) {}
    //  console.log(news);
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
    if (newsQuantity >= 200) {
      ToastAndroid.show('No more news', ToastAndroid.SHORT);
      setNewsEnd(true);
    } else {
      console.log(offSet);
      console.log(newsQuantity)
      setOffSet(newsQuantity);
      setNewsQuantity(newsQuantity + 15);
      console.log(newsQuantity)

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
