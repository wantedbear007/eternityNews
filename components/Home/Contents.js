import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import TrendingData from './TrendingData';
import DummyData from '../../DummyData';
import Theme from '../../assets/UI/Theme';
import ScreenDimensions from '../../assets/UI/ScreenDimensions';

const Contents = () => {
  const colors = Theme();

  //   Trending Section
  const Trending = () => {
    const DataRender = ({item}) => (
      <TouchableOpacity
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
    const RenderData = ({item}) => (
      <TouchableOpacity
        activeOpacity={0.4}
        style={[styles.compactCard, {backgroundColor: colors.cardBackground}]}>
        <Image source={{uri: item.image_url}} style={styles.compactImage} />
        <View>
          <Text
            style={[
              styles.compactTitle,
              {color: colors.text, width: ScreenDimensions.width * 0.65},
            ]}>
            {item.title}
          </Text>
          <Text style={{color: colors.accent}}>Read More..</Text>
          <Text style={[styles.sourceText, {color: colors.disabledText}]}>
            {item.source_name}
          </Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={styles.compactContainer}>
        {/* <Text style={[styles.heading, {color: colors.accent}]}>
          Today's Read
        </Text> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DummyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={RenderData}
          ListHeaderComponent={<Trending />}
        />
      </View>
    );
  };

  return <TodaysRead />;
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
    fontWeight: '400',
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 20
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
