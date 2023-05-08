import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export default function Checkbox({
  checked,
  onPress,
}: MyProps): React.JSX.Element {
  // hitSlop allows to click the button a bit outside of its boundaries. Note: not supported in TouchableOpacity
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            source={require('../../assets/check.png')}
            style={styles.checkIcon}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

interface MyProps {
  checked: boolean;
  onPress: () => void;
}
