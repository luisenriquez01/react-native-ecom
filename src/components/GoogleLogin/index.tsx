import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {styles} from './styles';

export default function GoogleLogin(): React.JSX.Element {
  // hitSlop allows to click the button a bit outside of its boundaries. Note: not supported in TouchableOpacity
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleGoogleLogin}
      style={styles.container}>
      <Image
        source={require('../../assets/google-icon.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}
