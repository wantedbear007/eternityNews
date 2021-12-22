import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Theme from '../../assets/UI/Theme';
import ScreenDimensions from '../../assets/UI/ScreenDimensions';

const Contents = ({navigation}) => {
  const colors = Theme();
  const [trendingNews, setTrendingNews] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    fetch('https://inshortsv2.vercel.app/news?type=trending&limit=2')
      .then(response => response.json())
      .then(data => setTrendingNews(data.articles));
  }, []);

  useEffect(() => {
    fetch('https://inshortsv2.vercel.app/news?type=all_news&limit=100')
      .then(response => response.json())
      .then(response => setNews(response.articles));
  }, []);

  //   Trending Section
  const Trending = () => {
    const DataRender = ({item}) => (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {data: item})}
        activeOpacity={0.4}
        style={[styles.trendingCard, {backgroundColor: colors.cardBackground}]}>
        <Image source={{uri: item.image_url}} style={styles.trendingImage} />
        <Text style={[styles.trendingTitle, {color: colors.text}]}>
          {item.title}
        </Text>
        <Text style={[styles.sourceText, {color: colors.disabledText}]}>
          {item.source_name}
        </Text>
      </TouchableOpacity>
    );

    return (
      <View style={styles.trendingContainer}>
        <Text style={[styles.title, {color: colors.accent}]}>Trending</Text>
        <FlatList
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={trendingNews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={DataRender}
        />
      </View>
    );
  };

  //   TodaysRead Section
  const TodaysRead = () => {
    const RenderData = ({item, index}) => {
      return (
        <View
          activeOpacity={0.4}
          style={[
            styles.compactCard,
            {backgroundColor: colors.cardBackground},
          ]}>
          <Image source={{uri: item.image_url}} style={styles.compactImage} />
          <View>
            <Text
              style={[
                styles.compactTitle,
                {color: colors.text, width: ScreenDimensions.width * 0.65},
              ]}>
              {item.title}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {data: item})}>
              <Text style={{color: colors.accent}}>Read More..</Text>
            </TouchableOpacity>
            <Text style={[styles.sourceText, {color: colors.disabledText}]}>
              {item.source_name}
            </Text>
          </View>
        </View>
      );
    };

    return (
      <View style={styles.compactContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={RenderData}
          ListHeaderComponent={<Trending />}
        />
      </View>
    );
  };

  return (
    <>
      <TodaysRead />
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontFamily: 'JosefinSans-SemiBold',
    marginBottom: 15,
  },

  // Trending Styles
  trendingContainer: {
    marginVertical: 17,
  },
  trendingCard: {
    paddingHorizontal: 19,
    paddingVertical: 20,
    borderRadius: 20,
    marginRight: 7,
  },
  trendingTitle: {
    fontSize: 18,
    width: 220,
    fontWeight: '600',
  },
  trendingImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    borderRadius: 51,
  },
  sourceText: {
    alignSelf: 'flex-end',
  },
  title: {
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 20,
  },

  // Compact Section Styles

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
    marginBottom: 7,
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

export default Contents;
