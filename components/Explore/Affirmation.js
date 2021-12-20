import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Theme from '../../assets/UI/Theme';

const Affirmation = () => {
    const colors = Theme()
  const [affirmation, setAffirmation] = useState();

  useEffect(() => {
    fetch('https://www.affirmations.dev/')
      .then(response => response.json())
      .then(data => setAffirmation(data.affirmation));
  }, []);

  return (
    <View>
      <Text style={[styles.text, {color: colors.accent}]}>{affirmation}.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
text: {
    fontSize: 26,
    fontFamily: 'JosefinSans-Bold',
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 15,
    marginHorizontal: 10,
}
})

export default Affirmation;
