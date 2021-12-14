import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Context from '../../context/Context';
import Theme from '../../assets/UI/Theme';

const TopHeader = ({navigation}) => {
  const colors = Theme();
  const {darkTheme, themeHandler} = useContext(Context);

  const themeButtonHandler = () => themeHandler(true);
  const aboutButtonHandler = () => navigation.navigate('About');


  return (
    <View style={styles.parentContainer}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, {color: colors.text}]}>Discover</Text>
        <Text style={[styles.slogan, {color: colors.accent}]}>
          Read the World Today!
        </Text>
      </View>
      <View style={styles.iconContainer} >
        <TouchableOpacity onPress={themeButtonHandler}>
          <Ionicons
            name={!darkTheme ? 'moon' : 'sunny'}
            size={28}
            color={colors.text}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={aboutButtonHandler}>
          <Ionicons name="code-slash" size={28} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    alignContent: 'center',
  },
  iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontFamily: 'JosefinSans-Bold',
  },
  slogan: {
    marginBottom: 6,
    fontSize: 10,
    fontFamily: 'JosefinSans-SemiBold',
    marginLeft: 18
  },
});

export default TopHeader;
