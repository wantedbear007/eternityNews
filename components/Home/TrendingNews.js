import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Theme from '../../assets/UI/Theme';
import TrendingData from './TrendingData';

const TrendingNews = () => {
  const colors = Theme();
  // FlatList function
  const DataRender = ({item}) => (
    <View
      style={[styles.cardContainer, {backgroundColor: colors.cardBackground}]}>
      <Image source={{uri: item.image_url}} style={styles.imageContainer} />
      <Text style={[styles.newsTitle, {color: colors.text}]}>{item.title}</Text>
      <Text style={[styles.sourceText, {color: colors.disabledText}]}>
        {item.source_name}
      </Text>
    </View>
  );

  return (
    <View style={[styles.parentContainer]}>
      <Text style={[styles.heading, {color: colors.accent}]}>TRENDING</Text>
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

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontFamily: 'JosefinSans-SemiBold',
    marginBottom: 15,
  },
  parentContainer: {
    marginHorizontal: 20,
    marginVertical: 17,
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

export default TrendingNews;
