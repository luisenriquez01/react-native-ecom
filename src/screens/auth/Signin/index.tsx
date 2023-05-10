import React from 'react';
import {ScrollView, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import withSafeAreaLayout from '../../../hoc/withSafeAreaLayout';

import {styles} from './styles';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../util/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Signin'>;

function Signin({navigation}: Props): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <AuthHeader onPress={() => navigation.goBack()} title="Sign in" />
      <Input label="Email" placeholder="email@example.com" />
      <Input isPassword label="Password" placeholder="**********" />
      <Button onPress={() => null} style={styles.button} title="Sign in" />
      <Separator label="Or sign in with" />
      <GoogleLogin />
      <Text style={styles.signInCTA}>
        Don't have an account?{' '}
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={styles.agreeTextBold}>
          Sign up
        </Text>
      </Text>
    </ScrollView>
  );
}

export default withSafeAreaLayout(Signin);
