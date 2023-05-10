import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function Button({
  onPress,
  style,
  title,
}: MyProps): React.JSX.Element {
  // hitSlop allows to click the button a bit outside of its boundaries. Note: not supported in TouchableOpacity
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, style]}>
      <Text style={styles.innerText}>{title}</Text>
    </TouchableOpacity>
  );
}

interface MyProps {
  style?: {[key: string]: any};
  title: string;
  onPress: () => void;
}
