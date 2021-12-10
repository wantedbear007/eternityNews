import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Theme from '../../assets/UI/Theme';
import DummyData from '../../DummyData';

const TodaysRead = () => {
  const colors = Theme();

  //   FlatList renderFunction
  const RenderData = ({item}) => (
    <View
      style={[styles.cardContainer, {backgroundColor: colors.cardBackground}]}>
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
    <View style={styles.parentContainer}>
      <Text style={[styles.heading, {color: colors.accent}]}>Today's Read</Text>
      <FlatList
        data={DummyData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={RenderData}
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
  cardContainer: {
    paddingHorizontal: 19,
    paddingVertical: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    resizeMode: 'contain',
    marginBottom: 7,
  },
  image: {
    borderRadius: 100,
    width: 70,
    height: 70,
  },
  title: {
    width: 220,
    fontFamily: 'JosefinSans-Regular',
  },
  source: {
    fontFamily: 'JosefinSans-Bold',
  },
  parentContainer: {
    marginHorizontal: 20,
  },
});

export default TodaysRead;
