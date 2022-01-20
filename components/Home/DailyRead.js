import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Theme from '../../assets/UI/Theme';
import axios from 'axios';
import DailyReadRender from './DailyReadRender';
import TrendingNews from './TrendingNews';

const DailyRead = ({navigation}) => {
  const [newsQuantity, setNewsQuantity] = useState(15);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  //FetchingData
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

  // Theme Manager
  const colors = Theme();

  const renderItems = ({item, nav}) =>
    loading ? (
      <ActivityIndicator size="large" color={colors.text} />
    ) : (
      <DailyReadRender item={item} navigation={navigation} />
    );

  // LOADING COmponent
  const Loader = () => (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={colors.text} />
    </View>
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
      ToastAndroid.show('No more news ☹️!', ToastAndroid.SHORT);
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
        ListHeaderComponent={<TrendingNews navigation={navigation}/>}
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

export default DailyRead;

const styles = StyleSheet.create({

  sourceText: {
    alignSelf: 'flex-end',
  },
  
  compactCard: {
    paddingHorizontal: 19,
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    resizeMode: 'contain',
    marginBottom: 10,
  },
  compactImage: {
    borderRadius: 100,
    width: 70,
    height: 70,
  },

  compactContainer: {
    marginHorizontal: 10,
  },
});
