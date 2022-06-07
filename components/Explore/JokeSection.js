import React from 'react';
import {View, Text, StyleSheet, Share} from 'react-native';
import IconRender from '../UI/IconRender';
import Icons from '../../assets/UI/Icons';

const JokeSection = ({colors, jokes, getJokes}) => {
  const {shareButton, nextButton} = Icons();

  const ShareButtonHandler = () => {
    Share.share({
      message: jokes.joke,
    });
  };

  return (
    <View
      style={[
        styles.parentContainer,
        {backgroundColor: colors.cardBackground},
      ]}>
      <Text style={[styles.joke, {color: colors.text}]}>{jokes.joke}</Text>
      <View style={styles.jokeContainer}>
        <Text style={[styles.category, {color: colors.accent}]}>Joke</Text>
        <Text style={[styles.category, {color: colors.disabledText}]}>
          Category: {jokes.category}
        </Text>
        <IconRender icon={shareButton} onPress={ShareButtonHandler} />
        <IconRender icon={nextButton} onPress={() => getJokes()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 15,
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  joke: {
    fontSize: 17,
    fontWeight: '600',
  },
  category: {
    fontWeight: '700',
  },
  jokeContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default JokeSection;
