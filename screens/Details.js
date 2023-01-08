import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Share,
  FlatList,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import Card from '../components/UI/Card';
import IconRender from '../components/UI/IconRender';
import Icons from '../assets/UI/Icons';
import Clipboard from '@react-native-clipboard/clipboard';
import axios from 'axios';
import ScreenDimensions from '../assets/UI/ScreenDimensions';
import {RenderTags} from '../components/Home/TrendingNewsRender';

const Details = ({route, navigation}) => {
  const offSetNumber = route.params.offSetNumber + 5;
  const item = route.params.data;
  const [news, setNews] = useState([item]);
  const [newsQuantity, setNewsQuantity] = useState(4);
  const [offSet, setOffSet] = useState(offSetNumber + 5);

  const {shareButton, copyButton, webIcon} = Icons();
  console.log(offSetNumber);
  const colors = route.params.colors;
  // const newsQuantity = 30;

  // date
  const RenderDate = () => {
    const date = new Date(Number(item.createdAt));
    return (
      <Text style={{color: colors.disabledText}}>{date.toDateString()}</Text>
    );
  };

  // fetch thumb News
  async function fetchData() {
    try {
      await axios
        .get(
          `https://inshorts.me/news/all?offset=${offSet}&limit=${newsQuantity}`,
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

  // Infinite Scrolling Function 
  const infiniteScrolling = () => {
    console.log("called")
    if (newsQuantity >= 300) {
      ToastAndroid.show('No more news', ToastAndroid.SHORT);
      // setNewsEnd(true);
    } else {
      // setOffSet(newsQuantity);
      setNewsQuantity(newsQuantity + 2);
    }
  };

  useEffect(() => {
    fetchData();
  }, [newsQuantity]);

  // ShareFunction
  const onShare = () => {
    Share.share({
      message: item.title + ' (' + item.content + ')',
    });
  };

  // Copy to clipboard handler
  const copyToClipboard = () => {
    Clipboard.setString(item.title + ' (' + item.content + ')');
    ToastAndroid.show('News Copied', ToastAndroid.SHORT);
  };

  // Footer
  const Footer = ({onPress, text, icon}) => {
    return (
      <TouchableOpacity
        style={[
          styles.btnContainer,
          {
            width: ScreenDimensions.width / 4,
            // backgroundColor: colors.background,
          },
        ]}
        onPress={onPress}>
        <IconRender icon={icon} />
        <Text style={{marginLeft: 4, color: colors.text}}>{text}</Text>
      </TouchableOpacity>
    );
  };

  //Flat list renderer
  const RenderCard = ({item}) => {
    // hellloooo
    const FooterBtn = () => {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 20,
            position: 'absolute',
            width: ScreenDimensions.width,
            bottom: 20,
          }}>
          <Footer onPress={copyToClipboard} text={'Copy'} icon={copyButton} />
          <Footer
            onPress={() => {
              Linking.openURL(item.sourceUrl);
            }}
            text={'Read More'}
            icon={webIcon}
          />
          <Footer onPress={onShare} text={'Share'} icon={shareButton} />
        </View>
      );
    };

    return (
      // <Card>
      <View
        style={{
          flex: 1,
          height: ScreenDimensions.height - 25,
          backgroundColor: colors.cardBackground,
        }}>
        <View>
          <View style={styles.parentContainer}>
            <View style={styles.topNavigation}>
              <View>
                <ImageBackground
                  style={[
                    {
                      paddingVertical: 15,
                      paddingHorizontal: 10,
                    },
                    styles.imgBackground,
                  ]}
                  source={{uri: item.imageUrl}}
                  blurRadius={90}>
                  <RenderTags colors={colors} item={item} />
                  <Text style={[styles.titleText, {color: '#fff'}]}>
                    {item.title}
                  </Text>
                  <Text style={{color: '#CFDBD5', fontSize: 17}}>
                    {item.subtitle}
                  </Text>
                </ImageBackground>
                <Image
                  style={[
                    styles.imageContainer,
                    {width: ScreenDimensions.width},
                  ]}
                  source={{uri: item.imageUrl}}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingHorizontal: 14,
                paddingVertical: 15,
                backgroundColor: colors.background,
              }}>
              <Text style={[styles.sourceName, {color: colors.accent}]}>
                {item.sourceName}
              </Text>
              <RenderDate />
            </View>
            <View style={[styles.cardContainer]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 14,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center'}}></View>
              </View>

              <Text style={[styles.description, {color: colors.disabledText}]}>
                {item.content}
              </Text>

              {/* <Footer /> */}
            </View>
          </View>
        </View>
        <FooterBtn />
      </View>
    );
  };

  return (
    <Card>
      <View style={[styles.grandParent, {height: ScreenDimensions.height}]}>
        <FlatList
          // fadingEdgeLength={200}
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={RenderCard}
          snapToAlignment="start"
          viewabilityConfig={{itemVisiblePercentThreshold: 90}}
          pagingEnabled={true}
          legacyImplementation={false}
          maxToRenderPerBatch={5}
          decelerationRate={'fast'}
          onEndReached={infiniteScrolling}

        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  grandParent: {
    // flex: 1,
    height: '100%',
    // marginVertical: 40
    // paddingVertical: 40,
  },

  btnContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 8,
    borderRadius: 8,
    textAlign: 'center',
    justifyContent: 'center',
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

  imgBackground: {
    tintColor: '#000',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    // marginBottom: 20,
    // marginLeft: 8,
  },
  imageContainer: {
    // marginVertical: 10,
    // width: '100%',
    height: 270,
    resizeMode: 'cover',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
  },
  cardContainer: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 2,
    // backgroundColor: "red"
    // paddingBottom: 30,
    // borderRadius: 15,
  },
  childContainer: {
    // backgroundColor: "red",
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
    fontWeight: '600',
  },
});

export default Details;
