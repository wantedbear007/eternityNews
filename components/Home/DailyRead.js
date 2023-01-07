import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, ToastAndroid, Text} from 'react-native';
import axios from 'axios';
import DailyReadRender from './DailyReadRender';
import TrendingNews from './TrendingNews';
import AsyncStorage from '@react-native-community/async-storage';
import SkeletonHome from './SkeletonHome';
import ErrorScreen from '../UI/ErrorScreen';

const DailyRead = ({navigation, colors}) => {
  const [newsQuantity, setNewsQuantity] = useState(15);
  const [news, setNews] = useState([]);
  const [newsEnd, setNewsEnd] = useState(false);
  const [loading, setLoading] = useState(true);
  const [offSet, setOffSet] = useState(0);
  const [errorStatus, setErrorStatus] = useState(false);

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
    // getStoredData();
    try {
      axios
        .get(
          `https://inshorts.me/news/all?offset=${offSet}&limit=${newsQuantity}`,
        )

        .then(response => {
          setNews(response.data.data.articles);
          setLoading(false);
        })
        .catch(err => {
          if (err.response) {
            setErrorStatus(true);
          }
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
    if (newsQuantity >= 200) {
      ToastAndroid.show('No more news', ToastAndroid.SHORT);
      setNewsEnd(true);
    } else {
      setOffSet(newsQuantity);
      setNewsQuantity(newsQuantity + 15);
    }
  };

  return (
    <View style={styles.compactContainer}>
      {errorStatus ? (
        <>
          <ErrorScreen colors={colors} />
        </>
      ) : (
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
      )}
    </View>
  );
};

export default DailyRead;

const styles = StyleSheet.create({
  compactContainer: {
    marginHorizontal: 10,
  },
});
