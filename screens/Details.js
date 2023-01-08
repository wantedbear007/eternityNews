import React, {useEffect, useState} from 'react';
import {View, FlatList, ToastAndroid} from 'react-native';
import Card from '../components/UI/Card';
import Icons from '../assets/UI/Icons';
import axios from 'axios';
import ScreenDimensions from '../assets/UI/ScreenDimensions';
import DetailsRender from '../components/Details/DetailsRender';

const Details = ({route, navigation}) => {
  const offSetNumber = route.params.offSetNumber + 5;
  const item = route.params.data;
  const [news, setNews] = useState([item]);
  const [newsQuantity, setNewsQuantity] = useState(5);
  const [offSet, setOffSet] = useState(offSetNumber + 5);

  const icons = Icons();
  const colors = route.params.colors;

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
    console.log('called');
    if (newsQuantity >= 300) {
      ToastAndroid.show('No more news', ToastAndroid.SHORT);
      // setNewsEnd(true);
    } else {
      setOffSet(offSet + newsQuantity);
      console.log(newsQuantity);
      setNewsQuantity(newsQuantity + 10);
    }
  };

  useEffect(() => {
    fetchData();
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
