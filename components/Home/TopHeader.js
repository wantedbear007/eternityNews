import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Context from '../../context/Context';
import IconRender from '../UI/IconRender';

const TopHeader = ({colors, icons, navigation}) => {
  const {darkTheme, themeHandler} = useContext(Context);
  const {moonIcon, sunIcon, searchIcon} = icons;

  const themeButtonHandler = () => themeHandler(true);
  return (
    <View style={[{backgroundColor: colors.cardBackground}]}>
      <View style={styles.parentContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, {color: colors.text}]}>Discover</Text>
          <Text style={[styles.slogan, {color: colors.accent}]}>
            Better informed briefly.
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={themeButtonHandler}
            style={{marginRight: 16}}>
            <IconRender
              icon={searchIcon}
              onPress={() => navigation.navigate('Search')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={themeButtonHandler}>
            {darkTheme ? (
              <IconRender icon={sunIcon} onPress={themeButtonHandler} />
            ) : (
              <IconRender icon={moonIcon} onPress={themeButtonHandler} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 2,
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
