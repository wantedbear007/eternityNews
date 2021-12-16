import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Context from '../../context/Context';
import Theme from '../../assets/UI/Theme';

const TopHeader = () => {
  const colors = Theme();
  const {darkTheme, themeHandler} = useContext(Context);

  const themeButtonHandler = () => themeHandler(true);

  return (
    <View style={styles.parentContainer}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, {color: colors.text}]}>Discover</Text>
        <Text style={[styles.slogan, {color: colors.accent}]}>
          Read the World Today!
        </Text>
      </View>

      <TouchableOpacity onPress={themeButtonHandler}>
        <Ionicons
          name={!darkTheme ? 'moon' : 'sunny'}
          size={28}
          color={colors.text}
          style={{marginRight: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 2,
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    fontFamily: 'JosefinSans-SemiBold',
  },
  slogan: {
    marginBottom: 7,
    fontSize: 10,
    fontFamily: 'JosefinSans-SemiBold',
    marginLeft: 18,
  },
});

export default TopHeader;
