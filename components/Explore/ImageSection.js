import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Theme from '../../assets/UI/Theme';
import ScreenDimensions from '../../assets/UI/ScreenDimensions';
import { Divider } from 'react-native-paper';


const ImageSection = () => {
  const colors = Theme();
  const [imageData, setImageData] = useState();

  useEffect(() => {
    let pageNumber = Math.floor(Math.random() * 200);
    const url = 'https://picsum.photos/v2/list?page=' + pageNumber + '&limit=5';
    fetch(url)
      .then(response => response.json())
      .then(data => setImageData(data));
  }, []);

  const DataFetchHandler = ({item}) => (
    <View>
      <Image source={{uri: item.download_url}} style={styles.image} />
      <Text style={[styles.authorName, {color: colors.background}]}>
        {item.author}
      </Text>
    </View>
  );

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        data={imageData}
        keyExtractor={item => item.id}
        renderItem={DataFetchHandler}
      />
      <Divider horizontal={true} style={{backgroundColor: colors.text}} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: ScreenDimensions.width,
    height: 300,
    resizeMode: 'contain',
    marginRight: 3,
  },
  authorName: {
    fontSize: 14,
    borderRadius: 20,
    paddingHorizontal: 4,
    position: 'absolute',
    top: 30,
    right: ScreenDimensions.width / 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    textAlign: 'right',
  },
});

export default ImageSection;
