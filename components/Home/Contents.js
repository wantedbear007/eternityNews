import React from 'react';
import {
  View,
  Text,
  ScrollView,
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
        style={[
          styles.cardContainer,
          {backgroundColor: colors.cardBackground},
        ]}>
        <Image source={{uri: item.image_url}} style={styles.imageContainer} />
        <Text style={[styles.newsTitle, {color: colors.text}]}>
          {item.title}
        </Text>
        <Text style={[styles.sourceText, {color: colors.disabledText}]}>
          {item.source_name}
        </Text>
      </TouchableOpacity>
    );
    return (
      <View>
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
        style={[
          styles.cardContainer,
          {backgroundColor: colors.cardBackground},
        ]}>
        <View>
          <Image source={{uri: item.image_url}} style={styles.image} />
        </View>
        <View>
          <Text style={[styles.title, {color: colors.text}]}>{item.title}</Text>
          <Text style={[styles.source, {color: colors.disabledText}]}>
            {item.source_name}
          </Text>
        </View>
      </View>
    );
    return (
      <View>
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
  parentContainer: {
    marginVertical: 17,
    marginHorizontal: 20,
  },
  cardContainer: {
    paddingHorizontal: 19,
    paddingVertical: 20,
    borderRadius: 20,
    marginRight: 7,
  },
  newsTitle: {
    fontSize: 18,
    width: 220,
    fontFamily: 'JosefinSans-SemiBold',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    borderRadius: 51,
  },
  sourceText: {
    alignSelf: 'flex-end',
  },
});

export default Contents;
