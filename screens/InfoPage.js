import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import Theme from '../assets/UI/Theme';
import IconRender from '../components/UI/IconRender';
import Icons from '../assets/UI/Icons';
import Card from '../components/UI/Card';
import AsyncStorage from '@react-native-community/async-storage';
import SunButton from '../assets/Icons/bg4.svg';

const InfoPage = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const colors = Theme();
  const {staticNextButton} = Icons();

  const storeData = async txt => {
    try {
      const jsonVal = JSON.stringify(txt);
      await AsyncStorage.setItem('username', jsonVal);
    } catch (e) {
      console.log(e);
    }
  };

  // sUBMIT TEXT HANDLER
  const buttonHandler = () => {
    if (!text) {
      ToastAndroid.show('Name field cannot be empty !', ToastAndroid.SHORT);
    } else {
      storeData(text);
      navigation.replace('BottomNav');
    }
  };

  return (
    <Card>

        <SunButton
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 16,
            bottom: 0,
            flex: 1
          }}
        />
        <View style={[styles.parentContainer]}>
          <View />
          <KeyboardAvoidingView>
            <Image
              source={require('../assets/Images/appLogo.png')}
              style={styles.img}
            />
            <Text style={[styles.title, {color: colors.text}]}>
              Welcome to Eternity News !
            </Text>
            <Text style={[styles.slogan, {color: colors.disabledText}]}>
              Better informed briefly.
            </Text>
            <TextInput
              style={[styles.input, {color: colors.text}]}
              onChangeText={onChangeText}
              value={text}
              placeholder={'Enter your name'}
              autoCapitalize="words"
              multiline={false}
              placeholderTextColor={colors.disabledText}
              underlineColorAndroid={colors.disabledText}
            />
          </KeyboardAvoidingView>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={buttonHandler}
              activeOpacity={0.4}
              style={[styles.btn, {backgroundColor: colors.accent}]}>
              <IconRender onPress={buttonHandler} opacity={true} icon={staticNextButton} />
            </TouchableOpacity>
          </View>
        </View>
      {/* </ImageBackground> */}
     </Card>
  );
};
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    // marginHorizontal: 20,
  },
  img: {
    // width: '20%'
    marginLeft: 15,
  },
  title: {
    fontSize: 35,
    // letterSpacing: 1,
    marginLeft: 20,
    marginTop: 5,
  },
  slogan: {
    marginLeft: 22,
    fontSize: 13,
    // letterSpacing: 1,
  },
  input: {
    width: '90%',
    marginLeft: 10,
    fontSize: 20,
    paddingHorizontal: 10,
    // paddingVertical: 20,
    marginTop: 20,
    paddingBottom: 20,
  },
  btn: {
    // flex: 2,
    padding: 20,
    // width: '20%',
    // height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
  },
});

export default InfoPage;
