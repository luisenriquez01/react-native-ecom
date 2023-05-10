/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Config from 'react-native-config';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './src/screens/auth/Splash';
import Signin from './src/screens/auth/Signin';
import Signup from './src/screens/auth/Signup';

import type {RootStackParamList} from './src/util/types';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const screenOptions = {options: {headerShown: false}};

  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {...DefaultTheme.colors, background: 'white'},
        }}>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} {...screenOptions} />
          <Stack.Screen name="Signin" component={Signin} {...screenOptions} />
          <Stack.Screen name="Signup" component={Signup} {...screenOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
