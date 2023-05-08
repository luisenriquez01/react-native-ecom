import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function GoogleLogin(): React.JSX.Element {
  // hitSlop allows to click the button a bit outside of its boundaries. Note: not supported in TouchableOpacity
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => null}
      style={styles.container}>
      <Image
        source={require('../../assets/google-icon.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}
