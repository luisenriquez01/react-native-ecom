import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

export default function AuthHeader({onPress, title}: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onPress}>
        <Image
          source={require('../../assets/arrow-left.png')}
          style={styles.image}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

interface Props {
  onPress: () => void;
  title: string;
}
