import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Share} from 'react-native';
import IconRender from '../UI/IconRender';
import Icons from '../../assets/UI/Icons';

const JokeSection = ({colors}) => {
  const {shareButton, nextButton} = Icons();

  const [jokes, setJokes] = useState([]);
  const JokeHandler = () => {
    try {
      fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(response => response.json())
        .then(data => setJokes(data));
    } catch (err) {}
  };

  useEffect(() => {
    JokeHandler();
  }, []);

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
        {/* <View style={styles.iconContainer}> */}

        <IconRender icon={shareButton} onPress={ShareButtonHandler} />
        <IconRender onPress={JokeHandler} icon={nextButton} />
        {/* </View> */}
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
    alignItems: 'center'
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'column'
  }
});

export default JokeSection;
