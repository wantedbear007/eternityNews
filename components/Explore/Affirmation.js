import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Affirmation = ({colors, affirmation}) => {
  // const [affirmation, setAffirmation] = useState();

  // useEffect(() => {
  //   try {
  //     fetch('https://www.affirmations.dev/')
  //       .then(response => response.json())
  //       .then(data => setAffirmation(data.affirmation));
  //   } catch (error) {}
  // }, []);

  return (
    <>
      <Text style={[styles.text, {color: colors.accent}]}>{affirmation}.</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    // fontWeight: '500',
    letterSpacing: 1.2,
    textAlign: 'center',
    marginVertical: 15,
    marginHorizontal: 10,
  },
});

export default Affirmation;
