import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function withSafeAreaLayout<T extends object>(
  Component: React.ComponentType<T>,
): (props: T) => React.JSX.Element {
  return function WrappedComponent(props: T) {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
      <SafeAreaView>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Component {...props} />
      </SafeAreaView>
    );
  };
}
