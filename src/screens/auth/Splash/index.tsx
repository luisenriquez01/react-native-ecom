import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Button from '../../../components/Button';
import withSafeAreaLayout from '../../../hoc/withSafeAreaLayout';

import {styles} from './styles';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../util/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

function Splash({navigation}: Props): React.JSX.Element {
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
      <Button onPress={() => navigation.navigate('Signup')} title="Sign up" />
      <Pressable hitSlop={20}>
        <Text
          onPress={() => navigation.navigate('Signin')}
          style={styles.footerText}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
}

export default withSafeAreaLayout(Splash);
