import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../assets/UI/Theme';

// Screens
import Home from '../screens/Home';
import About from '../screens/About';
import Details from '../screens/Details';
import Explore from '../screens/Explore';

// For app navigation
const Stack = createNativeStackNavigator();

// For bottom Navigation
const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
  const colors = Theme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.accent}
      shifting={true}
      barStyle={{
        backgroundColor: colors.background,
        position: 'absolute',
        bottom: 7,
        left: 10,
        right: 10,
        paddingHorizontal: 20,
        paddingVertical: 6,
        marginHorizontal: 10,
        borderRadius: 20,
        elevation: 20,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="explore" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="lightbulb" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
