import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Share,
  FlatList,
} from 'react-native';
import Card from '../components/UI/Card';
import IconRender from '../components/UI/IconRender';
import Icons from '../assets/UI/Icons';
import Clipboard from '@react-native-clipboard/clipboard';
import axios from 'axios';
import ScreenDimensions from '../assets/UI/ScreenDimensions';

const Details = ({route, navigation}) => {
  // trial
  const item = route.params.data;
  const [news, setNews] = useState([item]);

  const {bigShareButton, backButton, copyButton} = Icons();
  const offSetNumber = route.params.offSetNumber + 5;
  console.log(offSetNumber);
  // console.log(route.params)
  const colors = route.params.colors;
  const newsQuantity = 30;

  // making news list

  // console.log(news)

  // fetch thumb News
  async function fetchData() {
    try {
      await axios
        .get(
          `https://inshorts.me/news/all?offset=${offSetNumber}&limit=${newsQuantity}`,
        )

        .then(response => {
          let newsArray = response.data.data.articles;
          const renderNews = news.concat(newsArray);
          setNews(renderNews);
        })
        .catch(err => {
          if (err.response) {
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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

  //Flat list renderer
  const RenderCard = ({item}) => {
    return (
      // <Card>
      <View style={{flex: 1, height: ScreenDimensions.height}}>
        {/* <ScrollView> */}
        <View>
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
        </View>
        {/* </ScrollView> */}
        <View style={styles.bottomControls}>
          <IconRender
            onPress={() => navigation.navigate('BottomNav')}
            icon={backButton}
          />
          <IconRender onPress={copyToClipboard} icon={copyButton} />
          <IconRender onPress={onShare} icon={bigShareButton} />
        </View>
      </View>
      /* </Card> */
    );
  };

  return (
    <Card>
      <View style={[styles.grandParent,{height: ScreenDimensions.height} ]}>
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={RenderCard}
          snapToAlignment="start"
          viewabilityConfig={{itemVisiblePercentThreshold: 90}}
          pagingEnabled={true}
          legacyImplementation={false}
          maxToRenderPerBatch={5}
          decelerationRate={'fast'}
        />
      </View>
    </Card>
    /* // <Card>
    //   <ScrollView>
    //     <View style={styles.parentContainer}>
    //       <View style={styles.topNavigation}>
    //         <Text style={[styles.titleText, {color: colors.text}]}>
    //           {item.title}
    //         </Text>
    //       </View>

    //       <View */
    /* //         style={[ */
    //           styles.cardContainer,
    //           {backgroundColor: colors.cardBackground},
    //         ]}>
    //         <Image
    //           style={styles.imageContainer}
    //           source={{uri: item.imageUrl}}
    //         />
    //         <View style={styles.childContainer}>
    //           <Text style={[styles.authorName, {color: colors.disabledText}]}>
    //             {'Author: '}
    //             {item.authorName}
    //           </Text>
    //           <Text style={[styles.sourceName, {color: colors.accent}]}>
    //             {item.sourceName}
    //           </Text>
    //         </View>
    //         <Text style={[styles.description, {color: colors.text}]}>
    //           {item.content}
    //         </Text>
    //         <TouchableOpacity
    //           onPress={() => {
    //             Linking.openURL(item.sourceUrl);
    //           }}>
    //           <Text style={[styles.source, {color: colors.accent}]}>
    //             Read source
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </ScrollView>
    //   <View style={styles.bottomControls}>
    //     <IconRender
    //       onPress={() => navigation.navigate('BottomNav')}
    //       icon={backButton}
    //     />
    //     <IconRender onPress={copyToClipboard} icon={copyButton} />
    //     <IconRender onPress={onShare} icon={bigShareButton} />
    //   </View>
    // </Card> */}
  );
};

const styles = StyleSheet.create({
  grandParent: {
    // flex: 1,
    height: '100%',
    // marginVertical: 40
    // paddingVertical: 40,
  },
  parentContainer: {
    // marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // height: "90%"
  },
  topNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 40,
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
