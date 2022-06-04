import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Theme from '../../assets/UI/Theme';
import ScreenDimensions from '../../assets/UI/ScreenDimensions';

export const RenderSkelton = () => {
  const colors = Theme();
  return (
    <SkeletonPlaceholder
      backgroundColor={colors.skeleton}
      highlightColor={colors.skeletonLoading}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 22,
        }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            backgroundColor: 'red',
            marginBottom: 10,
          }}
        />
        <View style={{marginLeft: 20}}>
          <View
            style={{
              width: ScreenDimensions.width / 1.5,
              height: 20,
              borderRadius: 4,
            }}
          />
          <View
            style={{
              marginTop: 6,
              width: ScreenDimensions.width / 2,
              height: 20,
              borderRadius: 4,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

const SkeletonHome = () => {
  return (
    <>
      <RenderSkelton />
      <RenderSkelton />
      {/* <RenderSkelton /> */}
      <RenderSkelton />
      <RenderSkelton />
    </>
  );
};

export default SkeletonHome;
