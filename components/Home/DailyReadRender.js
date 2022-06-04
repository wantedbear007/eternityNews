import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native';
import React, {memo} from 'react';
import ScreenDimensions from '../../assets/UI/ScreenDimensions';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const DailyReadRender = ({item, navigation, colors}) => {
    // const colors= Theme()
    
        //   Navigation Function
        const NavigateDetailsPage = () => {
          navigation.navigate('Details', {data: item, colors: colors});
        };
        return (
          <View
            activeOpacity={0.4}
            style={[styles.compactCard, {backgroundColor: colors.cardBackground}]}>
            <Image source={{uri: item.image_url}} style={styles.compactImage} />
            <View>
              <Text
                style={[
                  styles.compactTitle,
                  {color: colors.text, width: ScreenDimensions.width * 0.65},
                ]}>
                {item.title}
              </Text>
              <TouchableOpacity onPress={NavigateDetailsPage}>
                <Text style={{color: colors.accent}}>Read More..</Text>
              </TouchableOpacity>
              <Text style={[styles.sourceText, {color: colors.disabledText}]}>
                {item.source_name}
              </Text>
            </View>
          </View>
        );
};

export default memo(DailyReadRender);

const styles = StyleSheet.create({
    sourceText: {
        alignSelf: 'flex-end',
      },
      // title: {
      //   fontWeight: '600',
      //   marginLeft: 20,
      //   marginBottom: 10,
      //   fontSize: 20,
      // },
    
      // Compact Section Styles
    
      compactCard: {
        paddingHorizontal: 19,
        paddingVertical: 20,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
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
        marginHorizontal: 10,
      },
});
