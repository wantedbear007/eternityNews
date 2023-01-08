import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';

// Function for rendering tags
export function RenderTags({colors, item}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {item.categoryNames.map(num => {
        return (
          <Text key={num} style={{color: colors.accent, marginRight: 3}}>
            {num.toUpperCase()}
          </Text>
        );
      })}
    </View>
  );
}

const TrendingNewsRender = ({colors, item, navigation}) => {
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
        <RenderTags colors={colors} item={item} />
        <Text style={[styles.trendingTitle, {color: colors.text}]}>
          {item.title}
        </Text>
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
    fontSize: 15,
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
