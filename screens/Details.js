import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import TopNav from '../components/UI/TopNav';
import Card from '../components/UI/Card';
import Theme from '../assets/UI/Theme';

const Details = ({route, navigation}) => {
  const colors = Theme();
  // console.log(route.params.data);
  const item = route.params.data;
  console.log(item);
  return (
    <Card>
      <TopNav navigation={navigation} />
      <ScrollView>
        <View style={styles.parentContainer}>
          <Text style={[styles.titleText, {color: colors.text}]}>
            {item.title}
          </Text>
          <Image style={styles.imageContainer} source={{uri: item.image_url}} />
          <View
            style={[
              styles.cardContainer,
              {backgroundColor: colors.cardBackground},
            ]}>
            <View style={styles.childContainer}>
              <Text style={[styles.authorName, {color: colors.disabledText}]}>
                {'Author: '}
                {item.author_name}
              </Text>
              <Text style={[styles.sourceName, {color: colors.accent}]}>
                {item.source_name}
              </Text>
            </View>
            <Text style={[styles.description, {color: colors.text}]}>
              {item.description}
            </Text>
            <TouchableOpacity onPress={() => {Linking.openURL(item.source_url)}}>
              <Text style={{color: colors.accent}}>Read source</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: '600',
  },
  imageContainer: {
    marginVertical: 10,
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  cardContainer: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  authorName: {
    fontWeight: '600',
  },
  sourceName: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Details;
