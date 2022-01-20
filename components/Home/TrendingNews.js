import {StyleSheet, Text, View, FlatList, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import Theme from '../../assets/UI/Theme';
import axios from 'axios';
import TrendingNewsRender from './TrendingNewsRender';
import {ActivityIndicator} from 'react-native-paper';

const TrendingNews = ({navigation}) => {
  const colors = Theme();

  const [news, setNews] = useState([]);
  const [newsQuantity, setNewsQuantity] = useState(10);
  const [loading, setLoading] = useState(true);
  //Fetching News
  useEffect(() => {
    axios
      .get(
        `https://inshortsv2.vercel.app/news?type=top_stories&limit=${newsQuantity}`,
      )
      .then(response => {
        setNews(response.data.articles);
        setLoading(false);
      });
  }, [newsQuantity]);

  // FlatLost Render
  const renderItems = ({item}) =>
    loading ? (
      <ActivityIndicator size="large" color={colors.text} />
    ) : (
      <TrendingNewsRender item={item} navigation={navigation} />
    );

  const renderLoader = () => (
    <ActivityIndicator
      size={40}
      color={colors.text}
      style={{
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    />
  );

  // Infinite Scrolling
  const infiniteScrolling = () => {
    if (newsQuantity >= 30) {
      ToastAndroid.show('No more news ☹️!', ToastAndroid.SHORT);
    } else {
      console.log('reached');
      setNewsQuantity(newsQuantity + 5);
    }
  };

  return (
    <View style={styles.trendingContainer}>
      <Text style={[styles.title, {color: colors.accent}]}>Top Stories</Text>
      <FlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItems}
        onEndReached={infiniteScrolling}
        ListFooterComponent={renderLoader}
        legacyImplementation={false}
        pagingEnabled={true}
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
