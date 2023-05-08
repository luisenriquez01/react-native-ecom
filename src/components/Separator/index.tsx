import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export default function Separator({label}: MyProps): React.JSX.Element {
  // hitSlop allows to click the button a bit outside of its boundaries. Note: not supported in TouchableOpacity
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{label}</Text>
      <View style={styles.line} />
    </View>
  );
}

interface MyProps {
  label: string;
}
