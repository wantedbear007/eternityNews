import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
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
  const [refreshing, setRefreshing] = useState(false);

  // delete
  const [del, setDel] = useState([]);

  // const storeData = async val => {
  //   try {
  //     const jsonVal = JSON.stringify(val);
  //     await AsyncStorage.setItem('newsData', jsonVal);
  //   } catch (e) {}
  // };

  // const getStoredData = async () => {
  //   try {
  //     const fetchedNewsData = await AsyncStorage.getItem('newsData');
  //     const fetchedJSON = JSON.parse(fetchedNewsData);
  //     setNews(fetchedJSON);
  //     setLoading(false);
  //   } catch (e) {}
  // };

  async function fetchData() {
    try {
      await axios
        .get(
          `https://inshorts.me/news/all?offset=${offSet}&limit=${newsQuantity}`,
        )

        .then(response => {
          setNews(response.data.data.articles);
          // console.log(response);
          // storeData(response.data.data.articles)
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
    fetchData();
  }, [newsQuantity]);

  const renderItems = ({item}) => {
    if (loading) {
      return <SkeletonHome />;
    } else {
      return (
        <DailyReadRender
          offSetNumber={offSet}
          colors={colors}
          item={item}
          navigation={navigation}
        />
      );
    }
  };

  // Infinite Scrolling
  const infiniteScrolling = () => {
    if (newsQuantity >= 300) {
      ToastAndroid.show('No more news', ToastAndroid.SHORT);
      setNewsEnd(true);
    } else {
      setOffSet(newsQuantity);
      setNewsQuantity(newsQuantity + 15);
    }
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    fetchData();
  }, []);
  return (
    <View style={styles.compactContainer}>
      {errorStatus ? (
        <>
          <ErrorScreen colors={colors} />
        </>
      ) : (
        <FlatList
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItems}
          onEndReached={infiniteScrolling}
          ListHeaderComponent={
            <TrendingNews
              colors={colors}
              refresh={refreshing}
              navigation={navigation}
            />
          }
          ListFooterComponent={!newsEnd && <SkeletonHome />}
          legacyImplementation={false}
          showsVerticalScrollIndicator={true}
          maxToRenderPerBatch={5}
          initialNumToRender={5}
          onEndReachedThreshold={0.5}
          viewabilityConfig={{
            minimumViewTime: 300,
            viewAreaCoveragePercentThreshold: 100,
            waitForInteraction: true,
          }}
          // removeClippedSubviews={true}
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
