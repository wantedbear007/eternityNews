import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Card from '../components/UI/Card';
import Theme from '../assets/UI/Theme';
import IconRender from '../components/UI/IconRender';
import Icons from '../assets/UI/Icons';
import axios from 'axios';
import SkeletonHome from '../components/Home/SkeletonHome';
import ErrorScreen from '../components/UI/ErrorScreen';
import ScreenDimensions from '../assets/UI/ScreenDimensions';

function Search({navigation}) {
  const [keywords, setKeywords] = useState('google');
  const [newsQuantity, setNewsQuantity] = useState(15);
  const [news, setNews] = useState([]);
  const [newsEnd, setNewsEnd] = useState(false);
  const [offSet, setOffSet] = useState(0);
  const [errorStatus, setErrorStatus] = useState(false);

  const {searchIcon, backButton} = Icons();
  const colors = Theme();

  async function fetchData() {
    const base_url = `https://inshorts.me/news/search?query=${keywords}&offset=${offSet}&limit=${newsQuantity}`;
    try {
      await axios
        .get(base_url)
        .then(response => {
          setNews(response.data.data.articles);
        })
        .catch(err => {
          if (err.response) {
            setErrorStatus(true);
          }
        });
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, [newsQuantity]);

  function renderItem({item}) {
    const NavigateDetailsPage = () => {
      navigation.navigate('Details', {
        data: item,
        keywords: keywords,
        offSetNumber: offSet,
        colors: colors,
      });
    };
    const date = new Date(Number(item.createdAt));

    return (
      <TouchableOpacity
        onPress={() => NavigateDetailsPage()}
        activeOpacity={0.4}
        style={[styles.container, {backgroundColor: colors.cardBackground}]}>
        <Image source={{uri: item.imageUrl}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, {color: colors.text}]}>{item.title}</Text>
          <Text style={[{color: colors.disabledText, fontWeight: '600'}]}>
            {date.toDateString()}
          </Text>
          <Text style={[styles.sourceName, {color: colors.accent}]}>
            {item.sourceName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  const infiniteScrolling = () => {
    if (newsQuantity >= 100) {
      ToastAndroid.show('No more news', ToastAndroid.SHORT);
      setNewsEnd(true);
    } else {
      setOffSet(newsQuantity);
      setNewsQuantity(newsQuantity + 10);
    }
  };

  const searchBtnHandler = () => {
    fetchData();
    Keyboard.dismiss();
  };

  return (
    <Card statusBarColor={colors.background}>
      <View style={styles.searchContainer}>
        {/* <Text style={[styles.search, {color: colors.text}]}>Search</Text> */}
        <View style={[styles.searchBar, {borderColor: colors.disabledText}]}>
          <IconRender
            icon={backButton}
            onPress={() => navigation.navigate('Home')}
          />

          <TextInput
            style={{
              fontSize: 20,
              width: ScreenDimensions.width / 1.5,
              backgroundColor: colors.cardBackground,
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
            onChangeText={setKeywords}
            onSubmitEditing={fetchData}
            placeholder={'Search News, articles...'}
            returnKeyType="search"
            cursorColor={colors.accent}
            //   underlineColorAndroid={colors.disabledText}
            inlineImageLeft="search_icon"
          />
          <IconRender icon={searchIcon} onPress={() => searchBtnHandler()} />
        </View>
      </View>
      {errorStatus ? (
        <>
          <ErrorScreen colors={colors} btnVisibility={false} />
        </>
      ) : (
        <FlatList
          scrollEventThrottle={16}
          data={news}
          ListFooterComponent={!newsEnd && <SkeletonHome />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          legacyImplementation={false}
          maxToRenderPerBatch={5}
          onEndReached={infiniteScrolling}
          initialNumToRender={5}
        />
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 22,
    marginVertical: 20,
    marginHorizontal: 12,
  },
  searchContainer: {
    // marginTop: 300
  },
  search: {
    fontSize: 33,
    letterSpacing: 2,
    fontWeight: '600',
  },
  container: {
    // flexDirection: 'row',
    // marginTop: 15,
    marginHorizontal: 10,
    // borderRadius: 10
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
    resizeMode: 'contain',
    marginBottom: 7,
    // marginRight: p
    paddingRight: 1,
    // backgroundColor:
  },
  image: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 5,
    // borderBottomRightRadius: 5,
    width: '30%',
  },
  textContainer: {
    paddingHorizontal: 8,
    paddingVertical: 13,
  },
  title: {
    width: '47%',
  },
  sourceName: {
    fontWeight: '600',
  },
});

export default Search;
