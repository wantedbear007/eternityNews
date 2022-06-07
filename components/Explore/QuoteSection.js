import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Share,
} from 'react-native';
import Icons from '../../assets/UI/Icons';
import IconRender from '../UI/IconRender';
import Clipboard from '@react-native-clipboard/clipboard';

const QuoteSection = ({colors, quote, getQuotes}) => {
  const {shareButton, nextButton, copyButton} = Icons();


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
      <Text style={[styles.quote, {color: colors.text}]}>{quote.qte}</Text>
      <View>
        <Text style={[styles.author, {color: colors.disabledText}]}>
          -{quote.author}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <IconRender onPress={ShareButtonHandler} icon={shareButton} />
        <IconRender onPress={copyToClipboard} icon={copyButton} />
        <IconRender onPress={() => getQuotes()} icon={nextButton} />
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
