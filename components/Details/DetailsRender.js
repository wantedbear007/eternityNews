import React from 'react';
import ScreenDimensions from '../../assets/UI/ScreenDimensions';
import {RenderTags} from '../Home/TrendingNewsRender';
import IconRender from '../UI/IconRender';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Share,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

class DetailsRender extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  //   Share button Handler
  onShare = () => {
    Share.share({
      message: this.props.item.title + ' (' + this.props.item.content + ')',
    });
  };

  //   Copy Button Handler
  copyToClipboard = () => {
    Clipboard.setString(
      this.props.item.title + ' (' + this.props.item.content + ')',
    );
    ToastAndroid.show('News Copied', ToastAndroid.SHORT);
  };

  render() {
    const {colors, item} = this.props;
    const {copyButton, shareButton, webIcon} = this.props.icons;
    const date = new Date(Number(item.createdAt));
    const Footer = ({onPress, text, icon}) => {
      return (
        <TouchableOpacity
          style={[
            styles.btnContainer,
            {
              width: ScreenDimensions.width / 4,
            },
          ]}
          onPress={onPress}>
          <IconRender icon={icon} />
          <Text style={{marginLeft: 4, color: colors.text}}>{text}</Text>
        </TouchableOpacity>
      );
    };

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
          <Footer
            onPress={this.copyToClipboard}
            text={'Copy'}
            icon={copyButton}
          />
          <Footer
            onPress={() => {
              Linking.openURL(this.props.item.sourceUrl);
            }}
            text={'Read More'}
            icon={webIcon}
          />
          <Footer onPress={this.onShare} text={'Share'} icon={shareButton} />
        </View>
      );
    };

    return (
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
              <Text style={{color: colors.disabledText}}>
                {date.toDateString()}
              </Text>
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
            </View>
          </View>
        </View>
        <FooterBtn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default DetailsRender;
