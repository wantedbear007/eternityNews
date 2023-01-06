import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Share,
} from 'react-native';
import Card from '../components/UI/Card';
import IconRender from '../components/UI/IconRender';
import Icons from '../assets/UI/Icons';
import Clipboard from '@react-native-clipboard/clipboard';

const Details = ({route, navigation}) => {
  const {bigShareButton, backButton, copyButton} = Icons();
  const item = route.params.data;
  const colors = route.params.colors;

  // ShareFunction
  const onShare = () => {
    Share.share({
      message: item.title + ' (' + item.content + ')',
    });
  };

  // Copy to clipboard handler
  const copyToClipboard = () => {
    Clipboard.setString(item.title + ' (' + item.content + ')');
  };

  return (
    <Card>
      <ScrollView>
        <View style={styles.parentContainer}>
          <View style={styles.topNavigation}>
            <Text style={[styles.titleText, {color: colors.text}]}>
              {item.title}
            </Text>
          </View>

          <View
            style={[
              styles.cardContainer,
              {backgroundColor: colors.cardBackground},
            ]}>
            <Image
              style={styles.imageContainer}
              source={{uri: item.imageUrl}}
            />
            <View style={styles.childContainer}>
              <Text style={[styles.authorName, {color: colors.disabledText}]}>
                {'Author: '}
                {item.authorName}
              </Text>
              <Text style={[styles.sourceName, {color: colors.accent}]}>
                {item.sourceName}
              </Text>
            </View>
            <Text style={[styles.description, {color: colors.text}]}>
              {item.content}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(item.sourceUrl);
              }}>
              <Text style={[styles.source, {color: colors.accent}]}>
                Read source
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomControls}>
        <IconRender
          onPress={() => navigation.navigate('BottomNav')}
          icon={backButton}
        />
        <IconRender onPress={copyToClipboard} icon={copyButton} />
        <IconRender onPress={onShare} icon={bigShareButton} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  titleText: {
    fontSize: 27,
    fontWeight: '600',
    marginBottom: 20,
    // marginLeft: 8,
  },
  imageContainer: {
    // marginVertical: 10,
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContainer: {
    width: '100%',
    paddingBottom: 30,
    borderRadius: 15,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 20,
  },
  authorName: {
    fontWeight: '600',
    marginRight: 3,
  },
  sourceName: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 17,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  bottomControls: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  source: {
    marginLeft: 15,
  },
});

export default Details;
