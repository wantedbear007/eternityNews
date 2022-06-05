import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Context from '../../context/Context';
import IconRender from '../UI/IconRender';

const TopHeader = ({colors, icons}) => {
  const {darkTheme, themeHandler} = useContext(Context);
  const {moonIcon, sunIcon} = icons;

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
        {darkTheme ? (
          <IconRender icon={sunIcon} onPress={themeButtonHandler} />
        ) : (
          <IconRender icon={moonIcon} onPress={themeButtonHandler} />
        )}
        {/* <Ionicons
          name={!darkTheme ? 'moon' : 'sunny'}
          size={24}
          color={colors.text}
          style={{marginRight: 10}}
        /> */}
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
    fontSize: 30,
    fontWeight: '800',
  },
  slogan: {
    marginBottom: 7,
    fontSize: 10,
  },
});

export default TopHeader;
