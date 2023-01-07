import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Theme from '../assets/UI/Theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Svg, {Path} from 'react-native-svg';

// Screens
import Home from '../screens/Home';
import About from '../screens/About';
import Details from '../screens/Details';
import Explore from '../screens/Explore';
import InfoPage from '../screens/InfoPage';
import LoadingPage from '../screens/LoadingPage';

// For app navigation
const Stack = createNativeStackNavigator();

// For bottom Navigation
const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const colors = Theme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.accent}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarStyle: {backgroundColor: colors.background},
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Svg
              width={21}
              height={21}
              fill={color}
              viewBox="0 0 330.242 330.242"
              xmlSpace="preserve"
              enableBackground="new 0 0 330.242 330.242">
              <Path d="M324.442 129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065 0-11 4.935-11 11v14.737l-55.213-44.999c-3.994-3.254-9.258-5.047-14.822-5.047-5.542 0-10.781 1.782-14.753 5.019L5.8 129.81c-6.567 5.351-6.173 10.012-5.354 12.314.817 2.297 3.448 6.151 11.884 6.151h19.791v154.947c0 11.058 8.972 20.053 20 20.053h62.5c10.935 0 19.5-8.809 19.5-20.053v-63.541c0-5.446 5.005-10.405 10.5-10.405h42c5.238 0 9.5 4.668 9.5 10.405v63.541c0 10.87 9.388 20.053 20.5 20.053h61.5c11.028 0 20-8.996 20-20.053V148.275h19.791c8.436 0 11.066-3.854 11.884-6.151.819-2.302 1.213-6.963-5.354-12.313z" />
            </Svg>
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <Svg width={27} height={27} viewBox="0 0 32 32">
              <Path
                d="M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13zm0-1c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm0-1c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11zm2.121-8.879c-1.767 1.768-9.192 4.95-9.192 4.95s3.182-7.425 4.95-9.192c1.767-1.768 9.192-4.95 9.192-4.95s-3.182 7.425-4.95 9.192zm-3.535-.707a2 2 0 102.828-2.828 2 2 0 00-2.828 2.828z"
                fill={color}
                stroke="none"
                strokeWidth={1}
                fillRule="evenodd"
              />
            </Svg>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoadingPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen name="InfoPage" component={InfoPage} />
      <Stack.Screen
        name="LoadingPage"
        component={LoadingPage}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{animation: 'fade_from_bottom'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
