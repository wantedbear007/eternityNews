import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';

const TrendingNewsRender = ({colors, item, navigation}) => {
  const a = [1, 2, 3, 5];

  const RenderTags = () => {
    return (
      // <View>
      <View style={{flexDirection: 'row'}}>
        {item.categoryNames.map(num => {
          return (
            <Text key={num} style={{color: colors.accent, marginRight: 3}}>
              {num.toUpperCase()}
            </Text>
          );
        })}
      </View>
      // </View>
    );
  };

  // Navigation Function
  const NavigateDetailsPage = () => {
    navigation.navigate('Details', {data: item, colors: colors});
  };
  return (
    <TouchableOpacity
      onPress={NavigateDetailsPage}
      activeOpacity={0.7}
      style={[
        styles.parentContainer,
        {backgroundColor: colors.cardBackground},
      ]}>
      <Image source={{uri: item.imageUrl}} style={styles.trendingImage} />
      <View style={styles.trendingCard}>
        <RenderTags />
        <Text style={[styles.trendingTitle, {color: colors.text}]}>
          {item.title}
        </Text>
        {/* <View style={{backgroundColor: colors.accent, flexDirection: 'row', borderRadius: 10, paddingHorizontal: 4, paddingVertical: 2}}>
        {item.categoryNames.map(num => {
          console.log(num);
          return (
            <Text key={num} style={{color: colors.text}}>
              {num}
            </Text>
          );
        })}
      </View> */}
        <Text style={[styles.sourceText, {color: colors.disabledText}]}>
          {item.sourceName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(TrendingNewsRender);

const styles = StyleSheet.create({
  trendingCard: {
    paddingHorizontal: 19,
    paddingVertical: 15,
    borderRadius: 20,
    marginBottom: 4,
  },
  parentContainer: {
    height: '100%',
    borderRadius: 20,
    marginRight: 9,
  },
  trendingTitle: {
    height: 80,
    // flex: 3,
    // flex:
    fontSize: 16,
    // marginTop: 5,
    width: 220,
    fontWeight: '500',
  },
  trendingImage: {
    width: '100%',
    height: 170,
    resizeMode: 'contain',
    // borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderBottomEndRadius: 30
  },
  sourceText: {
    alignSelf: 'flex-end',
  },
});
