import React from 'react';
import Theme from './Theme';
import Svg, {Path} from 'react-native-svg';

const Icons = () => {
  const colors = Theme();

  const icons = {
    nextButton: (
      <Svg
        height={28}
        viewBox="0 0 48 48"
        width={28}
        xmlns="http://www.w3.org/2000/svg"
        // {...props}
      >
        <Path
          d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z"
          fill={colors.text}
        />
        <Path d="M0 0h48v48H0z" />
      </Svg>
    ),
    shareButton: (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        viewBox="0 0 28 28"
        // width="30px"
        // fill={colors.text}
        height={20}>
        <Path
          fill={colors.text}
          d="M23 3a4 4 0 00-4 4 4 4 0 00.094.836l-9.082 4.541A4 4 0 007 11a4 4 0 00-4 4 4 4 0 004 4 4 4 0 003.014-1.375l9.076 4.54A4 4 0 0019 23a4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4 4 4 0 00-3.014 1.375l-9.076-4.54A4 4 0 0011 15a4 4 0 00-.094-.834l9.082-4.541A4 4 0 0023 11a4 4 0 004-4 4 4 0 00-4-4z"
        />
      </Svg>
    ),
    compassIcon: (
      <Svg
        width={28}
        height={28}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13zm0-1c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm0-1c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11zm2.121-8.879c-1.767 1.768-9.192 4.95-9.192 4.95s3.182-7.425 4.95-9.192c1.767-1.768 9.192-4.95 9.192-4.95s-3.182 7.425-4.95 9.192zm-3.535-.707a2 2 0 102.828-2.828 2 2 0 00-2.828 2.828z"
          fill={colors.text}
          stroke="none"
          strokeWidth={1}
          fillRule="evenodd"
        />
      </Svg>
    ),
  };

  //   export const nextButton =  <Svg
  //   height={48}
  //   viewBox="0 0 30 30"
  //   width={48}
  //   xmlns="http://www.w3.org/2000/svg"
  //   // {...props}
  // >
  //   <Path
  //     d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z"
  //     fill={colors.text}
  //   />
  //   <Path d="M0 0h48v48H0z" />
  // </Svg>

  return icons;
};


export default Icons;
