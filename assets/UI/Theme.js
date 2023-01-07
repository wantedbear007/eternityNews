import  {useContext} from 'react';
import Context from '../../context/Context';

const Theme = () => {
  const {darkTheme} = useContext(Context);

  colorsScheme = {
    background: darkTheme ? '#000' : '#fff',
    cardBackground: darkTheme ? '#141414' : '#F1F1F1',
    text: darkTheme ? '#FFFFFF' : '#000000',
    disabledText: darkTheme ? '#A7A7A7' : '#6B5E5E',
    accent: darkTheme ? '#6c63ff' : '#D00000',
    // #6c63ff
    // #7928CA
    // 141414
    // 1B1B1E
    skeleton: darkTheme ? "#1B1B1E" : "#F1F1F1",
    darkOn: darkTheme ? true : false,
    skeletonLoading: darkTheme ? "#73777B" : "#DDDDDD"
  };

  return colorsScheme;
};

export default Theme;
