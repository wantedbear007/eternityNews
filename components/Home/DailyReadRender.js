import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {memo} from 'react';
import ScreenDimensions from '../../assets/UI/ScreenDimensions';

class DailyReadRender extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  // navigate to details page
  NavigateDetailsPage = () => {
    this.props.navigation.navigate('Details', {
      data: this.props.item,
      offSetNumber: this.props.offSetNumber,
      colors: this.props.colors,
    });
  };

  render() {
    const {item, colors} = this.props;

    return (
      <TouchableOpacity onPress={this.NavigateDetailsPage} activeOpacity={0.4}>
        <View
          activeOpacity={0.4}
          style={[
            styles.compactCard,
            {backgroundColor: colors.cardBackground},
          ]}>
          <Image source={{uri: item.imageUrl}} style={styles.compactImage} />
          <View>
            <Text
              style={[
                styles.compactTitle,
                {color: colors.text, width: ScreenDimensions.width * 0.65},
              ]}>
              {item.title}
            </Text>
            <Text
              style={[
                {
                  color: colors.disabledText,
                  fontSize: 12,
                  width: ScreenDimensions.width * 0.65,
                },
              ]}>
              {item.subtitle}
            </Text>
            <TouchableOpacity onPress={this.NavigateDetailsPage}>
              <Text style={{color: colors.accent}}>Read More</Text>
            </TouchableOpacity>
            <Text style={[styles.sourceText, {color: colors.disabledText}]}>
              {item.sourceName}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

// const DailyReadRender = ({item, navigation, colors, offSetNumber}) => {

//   //   Navigation Function
//   const NavigateDetailsPage = () => {
//     navigation.navigate('Details', {
//       data: item,
//       offSetNumber: offSetNumber,
//       colors: colors,
//     });
//   };
//   return (
//     <TouchableOpacity onPress={NavigateDetailsPage} activeOpacity={0.4}>
//       <View
//         activeOpacity={0.4}
//         style={[styles.compactCard, {backgroundColor: colors.cardBackground}]}>
//         <Image source={{uri: item.imageUrl}} style={styles.compactImage} />
//         <View>
//           <Text
//             style={[
//               styles.compactTitle,
//               {color: colors.text, width: ScreenDimensions.width * 0.65},
//             ]}>
//             {item.title}
//           </Text>
//           <Text
//             style={[
//               {
//                 color: colors.disabledText,
//                 fontSize: 12,
//                 width: ScreenDimensions.width * 0.65,
//               },
//             ]}>
//             {item.subtitle}
//           </Text>
//           <TouchableOpacity onPress={NavigateDetailsPage}>
//             <Text style={{color: colors.accent}}>Read More..</Text>
//           </TouchableOpacity>
//           <Text style={[styles.sourceText, {color: colors.disabledText}]}>
//             {item.sourceName}
//           </Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

export default memo(DailyReadRender);

const styles = StyleSheet.create({
  sourceText: {
    alignSelf: 'flex-end',
  },
  compactTitle: {
    fontWeight: '600',
  },
  compactCard: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    resizeMode: 'contain',
    marginBottom: 7,
  },
  compactImage: {
    borderRadius: 100,
    width: 70,
    height: 70,
  },

  compactContainer: {
    marginHorizontal: 5,
  },
});
