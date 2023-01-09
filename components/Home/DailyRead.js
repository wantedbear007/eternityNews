/***
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import Sample from './Sample';
import DailyReadRender from './DailyReadRender';
import Theme from '../../assets/UI/Theme';

const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

let containerCount = 0;

/***
 * To test out just copy this component and render in you root component
 */
export default class RecycleTestComponent extends React.Component {
  constructor(args) {
    super(args);
    // console.log(Sample)
    let {width} = Dimensions.get('window');
    const handleTheme = () => {
      const colors = Theme();

      return colors;
    };

    // console.log()
    //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
    //THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    //Create the layout provider
    //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
    //Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
    //If you need data based check you can access your data provider here
    //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
    //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
    this._layoutProvider = new LayoutProvider(
      index => {
        return ViewTypes.FULL;
      },

      (type, dim) => {
        switch (type) {
          case ViewTypes.FULL:
            dim.width = width;
            dim.height = 140;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      },
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    this.state = {
      dataProvider: dataProvider.cloneWithRows(Sample),
    };
  }

  _rowRenderer(type, data) {
    return (
      <DailyReadRender
        offSetNumber={10}
        colors={this.props.colors}
        item={data}
        navigation={this.props.navigation}
      />
    );
  }

  render() {
    return (
      <RecyclerListView
        layoutProvider={this._layoutProvider}
        dataProvider={this.state.dataProvider}
        rowRenderer={this._rowRenderer}
        
      />
    );
  }
}
const styles = {
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#00a1f1',
  },
  containerGridLeft: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ffbb00',
  },
  containerGridRight: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#7cbb00',
  },
};

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   ToastAndroid,
//   RefreshControl,
//   Text,
// } from 'react-native';
// import axios from 'axios';
// import DailyReadRender from './DailyReadRender';
// import TrendingNews from './TrendingNews';
// import AsyncStorage from '@react-native-community/async-storage';
// import SkeletonHome from './SkeletonHome';
// import ErrorScreen from '../UI/ErrorScreen';
// import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

// const DailyRead = ({navigation, colors}) => {
//   const [newsQuantity, setNewsQuantity] = useState(15);
//   const [news, setNews] = useState([]);
//   const [newsEnd, setNewsEnd] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [offSet, setOffSet] = useState(0);
//   const [errorStatus, setErrorStatus] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);

//   // delete
//   const [del, setDel] = useState([]);

//   // const storeData = async val => {
//   //   try {
//   //     const jsonVal = JSON.stringify(val);
//   //     await AsyncStorage.setItem('newsData', jsonVal);
//   //   } catch (e) {}
//   // };

//   // const getStoredData = async () => {
//   //   try {
//   //     const fetchedNewsData = await AsyncStorage.getItem('newsData');
//   //     const fetchedJSON = JSON.parse(fetchedNewsData);
//   //     setNews(fetchedJSON);
//   //     setLoading(false);
//   //   } catch (e) {}
//   // };

//   async function fetchData() {
//     try {
//       await axios
//         .get(
//           `https://inshorts.me/news/all?offset=${offSet}&limit=${newsQuantity}`,
//         )

//         .then(response => {
//           setNews(response.data.data.articles);
//           // console.log(response);
//           // storeData(response.data.data.articles)
//           setLoading(false);
//         })
//         .catch(err => {
//           if (err.response) {
//             setErrorStatus(true);
//           }
//         });
//     } catch (error) {}
//   }

//   useEffect(() => {
//     fetchData();
//   }, [newsQuantity]);

//   const renderItems = ({item}) => {
//     if (loading) {
//       return <SkeletonHome />;
//     } else {
//       return (
//         <DailyReadRender
//           offSetNumber={offSet}
//           colors={colors}
//           item={item}
//           navigation={navigation}
//         />
//       );
//     }
//   };

//   // Infinite Scrolling
//   const infiniteScrolling = () => {
//     if (newsQuantity >= 300) {
//       ToastAndroid.show('No more news', ToastAndroid.SHORT);
//       setNewsEnd(true);
//     } else {
//       setOffSet(newsQuantity);
//       setNewsQuantity(newsQuantity + 10);
//     }
//   };

//   const wait = timeout => {
//     return new Promise(resolve => setTimeout(resolve, timeout));
//   };

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     wait(2000).then(() => setRefreshing(false));
//     fetchData();
//   }, []);

// // trial area
// const LolFooter = () => {
//   return (
//     <Text>Footer hai</Text>
//   )
// }

// const Magic = () => {
//   return (
//     <Text>Hello world</Text>
//   )
// }

//   return (
//     <View style={styles.compactContainer}>
//       {errorStatus ? (
//         <>
//           <ErrorScreen colors={colors} />
//         </>
//       ) : (
//         <View>
//           <Text>Heello world</Text>
//           <RecyclerListView
//             // style={{flex: 1}}
//             contentContainerStyle={{margin: 3}}
//             renderFooter={LolFooter}
//             // dataProvider={news}
//             layoutProvider={Magic}
//           />
//         </View>
//         /* <FlatList
//           scrollEventThrottle={16}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//           data={news}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={renderItems}
//           onEndReached={infiniteScrolling}
//           ListHeaderComponent={
//             <TrendingNews
//               colors={colors}
//               refresh={refreshing}
//               navigation={navigation}
//             />
//           }
//           ListFooterComponent={!newsEnd && <SkeletonHome />}
//           legacyImplementation={false}
//           showsVerticalScrollIndicator={true}
//           maxToRenderPerBatch={5}
//           initialNumToRender={5}
//           onEndReachedThreshold={0.5}
//           viewabilityConfig={{
//             minimumViewTime: 300,
//             viewAreaCoveragePercentThreshold: 100,
//             waitForInteraction: true,
//           }}
//           // removeClippedSubviews={true}
//         /> */
//       )}
//     </View>
//   );
// };

// export default DailyRead;

// const styles = StyleSheet.create({
//   compactContainer: {
//     flex: 1,
//     marginHorizontal: 10,
//   },
// });
