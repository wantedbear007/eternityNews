import  {useContext} from 'react';
import Context from '../../context/Context';

const Theme = () => {
  const {darkTheme} = useContext(Context);

  colorsScheme = {
    background: darkTheme ? '#000' : '#fff',
    cardBackground: darkTheme ? '#1B1B1E' : '#F1F1F1',
    text: darkTheme ? '#FFFFFF' : '#000000',
    disabledText: darkTheme ? '#A7A7A7' : '#6B5E5E',
    accent: darkTheme ? '#7928CA' : '#D00000',
    skeleton: darkTheme ? "#1B1B1E" : "#F1F1F1",
    darkOn: darkTheme ? true : false,
    skeletonLoading: darkTheme ? "#73777B" : "#DDDDDD"
  };

  return colorsScheme;
};

export default Theme;
