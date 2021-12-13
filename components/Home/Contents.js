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
        <FlatList
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
      <View
        style={[styles.compactCard, {backgroundColor: colors.cardBackground}]}>
        <View>
          <Image source={{uri: item.image_url}} style={styles.compactImage} />
        </View>
        <View>
          <Text style={[styles.compactTitle, {color: colors.text}]}>
            {item.title}
          </Text>
          <Text style={[styles.sourceText, {color: colors.disabledText}]}>
            {item.source_name}
          </Text>
        </View>
      </View>
    );
    return (
      <View style={styles.compactContainer}>
        <FlatList
          data={DummyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={RenderData}
          ListHeaderComponent={<Trending />}
        />
      </View>
    );
  };
  return (
    <View>
      <Text>Hello there !</Text>
      <TodaysRead />
    </View>
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
    marginHorizontal: 20,
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
    // fontFamily: 'JosefinSans-SemiBold',
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

  // Compact Section Styles

  compactCard: {
    paddingHorizontal: 19,
    paddingVertical: 20,
    borderRadius: 20,
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
  compactTitle: {
    width: 220,
    // fontFamily: 'JosefinSans-Regular',
  },
  compactContainer: {
    marginHorizontal: 20,
  },
});

export default Contents;
