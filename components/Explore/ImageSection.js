import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import ScreenDimensions from '../../assets/UI/ScreenDimensions';

const ImageSection = ({colors, imageData}) => {


  return (
    <View style={[styles.parent, {backgroundColor: colors.cardBackground}]}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {imageData.map(data => (
          <View style={styles.imageParent} key={data.id}>
            {!data.download_url ? (
              <Text>LOADING...</Text>
            ) : (
              <Image source={{uri: data.download_url}} style={styles.image} />
            )}
            <Text style={[styles.authorName, {color: colors.background}]}>
              {data.author}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: ScreenDimensions.width - 30,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  authorName: {
    fontSize: 14,
    borderRadius: 20,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 30,
    right: ScreenDimensions.width / 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    textAlign: 'right',
  },
  divider: {
    marginHorizontal: 50,
    marginVertical: 20,
  },

  parent: {
    marginHorizontal: 15,
    height: 300,
    borderRadius: 20,


  },
});

export default ImageSection;
