import React, {useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import TrendingData from './TrendingData';
import DummyData from '../../DummyData';
import Theme from '../../assets/UI/Theme';
import ScreenDimensions from '../../assets/UI/ScreenDimensions';

const Contents = ({navigation}) => {
  const colors = Theme();

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
          // decelerationRate={0}
          scrollEventThrottle={16}
          // bounces={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={TrendingData}
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
            <TouchableOpacity onPress={() => navigation.navigate('Details', {data: item})}>
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
        {/* <Text style={[styles.heading, {color: colors.accent}]}>
          Today's Read
        </Text> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          data={DummyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={RenderData}
          ListHeaderComponent={<Trending />}
        />
      </View>
    );
  };

  let AnimatedValue = val => {
    console.log(lol);
  };

  let AnimatedHeaderValue = new Animated.Value(0);
  const HEADER_MAX_HEIGHT = 150;
  const HEADER_MIN_HEIGHT = 50;

  const animatedHeaderBackground = AnimatedHeaderValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: ['blue', 'red'],
    extrapolate: 'clamp',
  });

  return (
    <>
      {/* <TopHeader AnimatedHeaderValue={AnimatedValue} /> */}
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
