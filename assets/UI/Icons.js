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
    bigShareButton: (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        viewBox="0 0 28 28"
        // width="30px"
        // fill={colors.text}
        height={25}>
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
    moonIcon: (
      <Svg
        fill={colors.text}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        width={22}
        height={22}>
        <Path
          fill={colors.text}
          d="M24.86 15.53a.5.5 0 00-.57 0A10.71 10.71 0 019.57.79.5.5 0 009 0a12.77 12.77 0 1016 16 .5.5 0 00-.14-.47z"
        />
      </Svg>
    ),
    sunIcon: (
      <Svg
        fill={colors.text}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width={22}
        height={22}>
        <Path
          fill={colors.text}
          d="M14.984.986A1 1 0 0014 2v3a1 1 0 102 0V2A1 1 0 0014.984.986zM5.797 4.8a1 1 0 00-.695 1.717l2.12 2.12a1 1 0 101.415-1.413L6.516 5.102a1 1 0 00-.72-.303zm18.375 0a1 1 0 00-.688.303l-2.12 2.12a1 1 0 101.413 1.415l2.121-2.121a1 1 0 00-.726-1.717zM15 8a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7zM2 14a1 1 0 100 2h3a1 1 0 100-2H2zm23 0a1 1 0 100 2h3a1 1 0 100-2h-3zM7.91 21.06a1 1 0 00-.687.303l-2.121 2.121a1 1 0 101.414 1.414l2.12-2.12a1 1 0 00-.726-1.717zm14.15 0a1 1 0 00-.697 1.717l2.121 2.121a1 1 0 101.414-1.414l-2.12-2.12a1 1 0 00-.717-.303zm-7.076 2.926A1 1 0 0014 25v3a1 1 0 102 0v-3a1 1 0 00-1.016-1.014z"
        />
      </Svg>
    ),
    copyButton: (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        // x="0px"
        // y="0px"
        fill={colors.text}
        viewBox="0 0 488.3 488.3"
        // xmlSpace="preserve"
        // enableBackground="new 0 0 488.3 488.3"
        // {...props}
      >
        <Path
          fill={colors.text}
          d="M314.25 85.4h-227c-21.3 0-38.6 17.3-38.6 38.6v325.7c0 21.3 17.3 38.6 38.6 38.6h227c21.3 0 38.6-17.3 38.6-38.6V124c-.1-21.3-17.4-38.6-38.6-38.6zm11.5 364.2c0 6.4-5.2 11.6-11.6 11.6h-227c-6.4 0-11.6-5.2-11.6-11.6V124c0-6.4 5.2-11.6 11.6-11.6h227c6.4 0 11.6 5.2 11.6 11.6v325.6z"
        />
        <Path
          fill={colors.text}
          d="M401.05 0h-227c-21.3 0-38.6 17.3-38.6 38.6 0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5c0-6.4 5.2-11.6 11.6-11.6h227c6.4 0 11.6 5.2 11.6 11.6v325.7c0 6.4-5.2 11.6-11.6 11.6-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5c21.3 0 38.6-17.3 38.6-38.6V38.6c0-21.3-17.3-38.6-38.6-38.6z"
        />
      </Svg>
    ),

    backButton: (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 319 511.61"
        fill={colors.text}>
        <Path
          fill={colors.text}
          d="M270.08 5.89l43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z"
        />
      </Svg>
    ),
    githubIcon: (
      <Svg
        width={30}
        height={30}
        viewBox="0 -0.5 25 25"
        xmlns="http://www.w3.org/2000/svg"
        fill={colors.text}>
        <Path
          fill={colors.text}
          d="M12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031a12.351 12.351 0 014.449 4.422l.031.058a12.182 12.182 0 011.654 6.166c0 5.406-3.483 10-8.327 11.658l-.087.026a.724.724 0 01-.642-.113l.002.001a.624.624 0 01-.208-.466v-.014.001l.008-1.226q.008-1.178.008-2.154a2.844 2.844 0 00-.833-2.274 10.918 10.918 0 001.718-.305l-.076.017a6.508 6.508 0 001.537-.642l-.031.017a4.52 4.52 0 001.292-1.058l.006-.007a4.9 4.9 0 00.84-1.645l.009-.035a7.888 7.888 0 00.329-2.281l-.001-.136v.007l.001-.072a4.73 4.73 0 00-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479a4.25 4.25 0 00-.404-1.814l.011.026a2.095 2.095 0 00-1.31.181l.012-.005a8.622 8.622 0 00-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433a9.103 9.103 0 00-1.272-.595l-.066-.022A2.174 2.174 0 005.837 5.1l.013-.002a4.2 4.2 0 00-.393 1.788c0 .531.097 1.04.275 1.509l-.01-.029a4.723 4.723 0 00-1.265 3.303v-.004l-.001.13c0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013a4.35 4.35 0 001.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012a3.056 3.056 0 01-.699.236l-.021.004c-.256.051-.549.08-.85.08h-.066.003a1.882 1.882 0 01-1.055-.348l.006.004a2.84 2.84 0 01-.881-.986l-.007-.015a2.603 2.603 0 00-.768-.827l-.009-.006a2.331 2.331 0 00-.776-.38l-.016-.004-.32-.048a1.048 1.048 0 00-.471.074l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001a.717.717 0 01-.645.111l.005.001C3.486 22.286.006 17.692.006 12.285c0-2.268.612-4.393 1.681-6.219l-.032.058a12.351 12.351 0 014.422-4.449l.058-.031a11.898 11.898 0 016.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z"
        />
      </Svg>
    ),
    telegramIcon: (
      <Svg
        width={30}
        height={30}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill={colors.text}>
        <Path
          fill={colors.text}
          d="M16 .5C7.437.5.5 7.438.5 16S7.438 31.5 16 31.5c8.563 0 15.5-6.938 15.5-15.5S24.562.5 16 .5zm7.613 10.619l-2.544 11.988c-.188.85-.694 1.056-1.4.656l-3.875-2.856-1.869 1.8c-.206.206-.381.381-.781.381l.275-3.944 7.181-6.488c.313-.275-.069-.431-.482-.156l-8.875 5.587-3.825-1.194c-.831-.262-.85-.831.175-1.231l14.944-5.763c.694-.25 1.3.169 1.075 1.219z"
        />
      </Svg>
    ),
  };

  return icons;
};

export default Icons;
