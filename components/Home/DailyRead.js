import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import DailyReadRender from './DailyReadRender';
import TrendingNews from './TrendingNews';

const DailyRead = ({navigation, colors}) => {
  const [newsQuantity, setNewsQuantity] = useState(15);
  const [news, setNews] = useState([]);
  const [newsEnd, setNewsEnd] = useState(false);
  const [loading, setLoading] = useState(true);

  //FetchingData
  useEffect(() => {
    axios
      .get(
        `https://inshortsv2.vercel.app/news?type=all_news&limit=${newsQuantity}`,
      )
      .then(response => {
        setNews(response.data.articles);
        setLoading(false);
      });
  }, [newsQuantity]);

  const renderItems = ({item, nav}) =>
    loading ? (
      <ActivityIndicator size="large" color={colors.text} />
    ) : (
      <DailyReadRender colors={colors} item={item} navigation={navigation} />
    );

  //   Loader
  const renderLoader = () => (
    <ActivityIndicator
      size={40}
      color={colors.text}
      style={{marginBottom: 160}}
    />
  );

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
        ListFooterComponent={!newsEnd && renderLoader}
        legacyImplementation={false}
        // pagingEnabled={true}
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
