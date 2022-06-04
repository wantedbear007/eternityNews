import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Theme from '../../assets/UI/Theme';
import ScreenDimensions from '../../assets/UI/ScreenDimensions';

const SkeletonExplore = () => {
  const colors = Theme();
  return (
    <SkeletonPlaceholder
      backgroundColor={colors.skeleton}
      highlightColor={colors.skeletonLoading}>
    <View
      style={{
        // flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: 22,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <View
          style={{
            width: ScreenDimensions.width / 2.3,
            height: 90,
            borderRadius: 10,
            marginRight: 10
          }}
        />
        <View
          style={{
            width: ScreenDimensions.width / 2.3,
            height: 90,
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          width: ScreenDimensions.width / 1.1,
          height:100,
          borderRadius: 10,
        }}
      />
      <View style={{marginVertical: 5}} />
      <View
        style={{
          width: ScreenDimensions.width / 1.1,
          height: 270,
          borderRadius: 10,
        }}
      />
      <View style={{marginVertical: 5}} />
      <View
        style={{
          width: ScreenDimensions.width / 1.1,
          height: 130,
          borderRadius: 10,
        }}
      />
    </View>
     </SkeletonPlaceholder>
  );
};

export default SkeletonExplore;
