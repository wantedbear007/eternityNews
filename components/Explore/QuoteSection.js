import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Share} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const QuoteSection = ({colors}) => {
  // const colors = Theme();

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const RandomQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  useEffect(() => {
    RandomQuote();
  }, []);

  const CustomBtn = ({icon, onPress}) => (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome5 name={icon} size={23} color={colors.text} />
    </TouchableOpacity>
  );

  const ShareButtonHandler = () => {
    Share.share({
      message: quote + ' -' + author,
    });
  };

  return (
    <View
      style={[
        styles.parentContainer,
        {backgroundColor: colors.cardBackground},
      ]}>
      <Text style={[styles.quote, {color: colors.text}]}>
        "{quote ? quote : 'Loading...'}"
      </Text>
      <View>
        <Text style={[styles.author, {color: colors.disabledText}]}>
          -{author}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <CustomBtn icon="share" onPress={ShareButtonHandler} />
        <CustomBtn icon="chevron-right" onPress={RandomQuote} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    marginHorizontal: 15,
  },
  quote: {
    fontSize: 16,
    alignItems: 'center',
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    marginRight: 14,
    fontWeight: '600',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 6,
  },
});

export default QuoteSection;
