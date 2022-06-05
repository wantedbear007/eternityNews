import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Share} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import ShareButton from '../../assets/Icons/shareButton.svg';
// import NextButton from '../../assets/Icons/352561_navigate_next_icon.svg';
// import Svg, {Path} from 'react-native-svg';
import Icons from '../../assets/UI/Icons';
import IconRender from '../UI/IconRender';
import Clipboard from '@react-native-clipboard/clipboard';


const QuoteSection = ({colors}) => {
  // const colors = Theme();
  const {shareButton, nextButton, copyButton} = Icons();
  // const {qte, author} = quote

  // const [quote, setQuote] = useState('');
  // const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState({});

  const RandomQuote = () => {
    //   // QUOTE REQUEST
    try {
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          setQuote({qte: data.content, author: data.author});
          // setQuote(data.content);
          // setAuthor(data.author);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    RandomQuote();
  }, []);

  // const CustomBtn = ({icon, onPress}) => (
  //   <TouchableOpacity onPress={onPress}>
  //     <FontAwesome5 name={icon} size={23} color={colors.text} />
  //   </TouchableOpacity>
  // );

  const copyToClipboard = () => {
    Clipboard.setString(quote.qte + ' -' + quote.author);
  };

  const ShareButtonHandler = () => {
    Share.share({
      message: quote.qte + ' -' + quote.author,
    });
  };

  return (
    <View
      style={[
        styles.parentContainer,
        {backgroundColor: colors.cardBackground},
      ]}>
      <Text style={[styles.quote, {color: colors.text}]}>
        "{quote.qte ? quote.qte : 'Loading...'}"
      </Text>
      <View>
        <Text style={[styles.author, {color: colors.disabledText}]}>
          -{quote.author}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <IconRender onPress={ShareButtonHandler} icon={shareButton} />
        <IconRender onPress={copyToClipboard} icon={copyButton} />
        <IconRender onPress={RandomQuote} icon={nextButton} />
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
    alignItems: 'center',
  },
});

export default QuoteSection;
