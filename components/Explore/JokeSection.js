import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const JokeSection = ({colors}) => {
  const [jokes, setJokes] = useState([]);
  const JokeHandler = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
      .then(response => response.json())
      .then(data => setJokes(data));
  };

  useEffect(() => {
    JokeHandler();
  }, []);

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
  },
});

export default JokeSection;
