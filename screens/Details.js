import React, {useEffect, useState} from 'react';
import {View, FlatList, ToastAndroid} from 'react-native';
import Card from '../components/UI/Card';
import Icons from '../assets/UI/Icons';
import axios from 'axios';
import ScreenDimensions from '../assets/UI/ScreenDimensions';
import DetailsRender from '../components/Details/DetailsRender';

const Details = ({route}) => {
  let offSetNumber = 1;
  let keywords = '';
  try {
    keywords = route.params.keywords;
    offSetNumber = route.params.offSetNumber + 5;
  } catch (err) {}
  const item = route.params.data;
  const [news, setNews] = useState([item]);
  const [newsQuantity, setNewsQuantity] = useState(5);
  const [offSet, setOffSet] = useState(offSetNumber);

  const icons = Icons();
  const colors = route.params.colors;

  // fetch thumb News
  async function fetchData(keywords = '') {
    let base_url = `https://inshorts.me/news/all?offset=${offSet}&limit=${newsQuantity}`;
    if (keywords.length >= 1) {
      base_url = `https://inshorts.me/news/search?query=${keywords}&offset=${offSet}&limit=${newsQuantity}`;
    }
    try {
      await axios
        .get(base_url)
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
    }
  }

  // Infinite Scrolling Function
  const infiniteScrolling = () => {
    if (newsQuantity >= 300) {
      ToastAndroid.show('No more news', ToastAndroid.SHORT);
      // setNewsEnd(true);
    } else {
      setOffSet(offSet + newsQuantity);
      setNewsQuantity(newsQuantity + 10);
    }
  };

  useEffect(() => {
    fetchData(keywords);
  }, [newsQuantity]);

  // Detail renderer
  const RenderItems = ({item}) => {
    return <DetailsRender item={item} colors={colors} icons={icons} />;
  };

  return (
    <Card>
      <View style={[{height: ScreenDimensions.height}]}>
        <FlatList
          // fadingEdgeLength={200}
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={RenderItems}
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

export default Details;
