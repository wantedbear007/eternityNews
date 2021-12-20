import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Theme from '../../assets/UI/Theme';

const WordSection = () => {
  const colors = Theme();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://random-words-api.vercel.app/word')
      .then(response => response.json())
      .then(response => setData(response));
  }, []);

  console.log(data);
  return (
    <View style={styles.parentContainer}>
      {data.map((item, index) => (
        <View key={index}>
          <Text style={[styles.word, {color: colors.accent}]}>{item.word}</Text>
          <Text style={{color: colors.disabledText}}>{item.definition}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  word: {
    fontSize: 22,
  },
});

export default WordSection;
