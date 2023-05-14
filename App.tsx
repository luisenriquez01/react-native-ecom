/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Config from 'react-native-config';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from './src/screens/auth/Splash';
import Signin from './src/screens/auth/Signin';
import Signup from './src/screens/auth/Signup';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';

import type {RootStackParamList} from './src/util/types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const screenOptions = {options: {headerShown: false}};

function TabNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/tabs/home_active.png')
              : require('./src/assets/tabs/home.png');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('./src/assets/tabs/bookmark_active.png')
              : require('./src/assets/tabs/bookmark.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('./src/assets/tabs/profile_active.png')
              : require('./src/assets/tabs/profile.png');
          }
          return <Image source={icon} style={{height: 24, width: 24}} />;
        },
        ...screenOptions.options,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function StackNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} {...screenOptions} />
      <Stack.Screen name="Signin" component={Signin} {...screenOptions} />
      <Stack.Screen name="Signup" component={Signup} {...screenOptions} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  const authed = false;

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {...DefaultTheme.colors, background: 'white'},
        }}>
        {authed ? <TabNavigator /> : <StackNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
