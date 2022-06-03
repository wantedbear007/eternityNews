import {StyleSheet, Text, View, FlatList, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TrendingNewsRender from './TrendingNewsRender';
import {ActivityIndicator} from 'react-native-paper';

const TrendingNews = ({colors, navigation}) => {
  // const colors = Theme();
  const [newsEnd, setNewsEnd] = useState(false);
  const [news, setNews] = useState([]);
  const [newsQuantity, setNewsQuantity] = useState(10);
  const [loading, setLoading] = useState(true);
  //Fetching News
  useEffect(() => {
    try {
      axios
        .get(
          `https://inshortsv2.vercel.app/news?type=top_stories&limit=${newsQuantity}`,
        )
        .then(response => {
          setNews(response.data.articles);
          setLoading(false);
        });
    } catch (e) {}
  }, [newsQuantity]);

  // FlatLost Render
  const renderItems = ({item}) =>
    loading ? (
      <ActivityIndicator size="large" color={colors.text} />
    ) : (
      <TrendingNewsRender colors={colors} item={item} navigation={navigation} />
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
          {},
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
        ListFooterComponent={!newsEnd && renderLoader}
        legacyImplementation={false}
        // pagingEnabled={true}
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
