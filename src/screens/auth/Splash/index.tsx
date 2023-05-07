import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

export default function Splash(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../../../assets/splash_image.png')}
        style={styles.imageSplash}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>here!</Text>
      </View>
      <Button onPress={() => console.log('Pressed!')} title="Sign up" />
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign in</Text>
      </Pressable>
    </View>
  );
}
