/* eslint-disable react/no-unstable-nested-components */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import THEME from './THEME.json';
import Home from './screens/home/home';
import Search from './screens/search/search';
import SignIn from './screens/signIn/signIn';
import SplashScreen from './screens/splashscreen/splashscreen';
import StoreUtil from './utils/storage/asyncStorage';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Unauthenticated = ({setUserToken}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        initialParams={{setUserToken}}
        name="SignIn"
        component={SignIn}
      />
    </Stack.Navigator>
  );
};

const Authenticated = ({setUserToken}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: THEME.colors.green}}
      inactiveColor={THEME.colors.musgo}
      activeColor={THEME.colors.dark}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        initialParams={{setUserToken}}
        component={Search}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const verifyUser = async () => {
    try {
      const response = await StoreUtil.getData('token');
      if (response) {
        setLoggedIn(true);
      }
    } catch {
      console.log('Error');
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  React.useEffect(() => {
    verifyUser();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor={THEME.colors.green} />
      {isLoggedIn ? (
        <Authenticated setUserToken={setLoggedIn} />
      ) : (
        <Unauthenticated setUserToken={setLoggedIn} />
      )}
    </NavigationContainer>
  );
}
