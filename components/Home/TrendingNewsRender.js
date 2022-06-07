import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';

const TrendingNewsRender = ({colors, item, navigation}) => {

  // Navigation Function
  const NavigateDetailsPage = () => {
    navigation.navigate('Details', {data: item, colors: colors});
  };
  return (
    <TouchableOpacity
      onPress={NavigateDetailsPage}
      activeOpacity={0.7}
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
};

export default memo(TrendingNewsRender);

const styles = StyleSheet.create({
  trendingCard: {
    paddingHorizontal: 19,
    paddingVertical: 20,
    borderRadius: 20,
    marginRight: 7,
  },
  trendingTitle: {
    fontSize: 16,
    marginTop: 5,
    width: 220,
    fontWeight: '500',
  },
  trendingImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  sourceText: {
    alignSelf: 'flex-end',
  },
});
