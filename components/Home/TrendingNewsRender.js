import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import Theme from '../../assets/UI/Theme';

const TrendingNewsRender = ({item, navigation}) => {
  const colors = Theme();

  // Navigation Function
  const NavigateDetailsPage = () => {
    navigation.navigate('Details', {data: item});
  };
  return (
    <TouchableOpacity
      onPress={NavigateDetailsPage}
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
});
