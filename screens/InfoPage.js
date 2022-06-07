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
} from 'react-native';
import Theme from '../assets/UI/Theme';
import IconRender from '../components/UI/IconRender';
import Icons from '../assets/UI/Icons';
import Card from '../components/UI/Card';
import AsyncStorage from '@react-native-community/async-storage';

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
      <View style={[styles.parentContainer]}>
        <View />
        <KeyboardAvoidingView>
          <Image
            source={require('../assets/Images/appLogo.png')}
            style={styles.img}
          />
          <Text style={[styles.title, {color: colors.text}]}>
            Eternity News
          </Text>
          <Text style={[styles.slogan, {color: colors.disabledText}]}>
            News and more.
          </Text>
          <TextInput
            style={[styles.input, {color: colors.text}]}
            onChangeText={onChangeText}
            value={text}
            placeholder={'Enter your name'}
            autoCapitalize="words"
            multiline={false}
            placeholderTextColor={colors.disabledText}
            underlineColorAndroid={colors.text}
          />
          {/* <View style={{backgroundColor: 'blue', }}> */}
        </KeyboardAvoidingView>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={buttonHandler}
            activeOpacity={0.4}
            style={[styles.btn, {backgroundColor: colors.accent}]}>
            <IconRender opacity={true} icon={staticNextButton} />
          </TouchableOpacity>
        </View>
      </View>
      {/* </View> */}
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
    marginLeft: 10,
  },
  title: {
    fontSize: 35,
    letterSpacing: 1,
    marginLeft: 10,
    marginTop: 5,
  },
  slogan: {
    marginLeft: 13,
    fontSize: 13,
  },
  input: {
    width: '80%',
    marginLeft: 10,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
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
