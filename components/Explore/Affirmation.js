import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const Affirmation = ({colors}) => {
  const [affirmation, setAffirmation] = useState();

  useEffect(() => {
    try {
      fetch('https://www.affirmations.dev/')
        .then(response => response.json())
        .then(data => setAffirmation(data.affirmation));
    } catch (error) {}
  }, []);

  return (
    <>
      <Text style={[styles.text, {color: colors.accent}]}>{affirmation}.</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 15,
    marginHorizontal: 10,
  },
});

export default Affirmation;
