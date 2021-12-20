import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Theme from '../../assets/UI/Theme';
import ScreenDimensions from '../../assets/UI/ScreenDimensions';

const ImageSection = () => {
  const colors = Theme();
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    let pageNumber = Math.floor(Math.random() * 200);
    const url = 'https://picsum.photos/v2/list?page=' + pageNumber + '&limit=5';
    fetch(url)
      .then(response => response.json())
      .then(data => setImageData(data));
  }, []);


    const lol = new Date()
    const hour = lol.getHours()

  return (
    <View style={styles.parent}>
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
  },
});

export default ImageSection;
