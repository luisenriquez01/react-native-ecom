import React from 'react';
import {ScrollView, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';

import {styles} from './styles';

export default function SignIn(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <AuthHeader onPress={() => console.log('Auth press')} title="Sign in" />
      <Input label="Email" placeholder="email@example.com" />
      <Input isPassword label="Password" placeholder="**********" />
      <Button onPress={() => null} style={styles.button} title="Sign in" />
      <Separator label="Or sign in with" />
      <GoogleLogin />
      <Text style={styles.signInCTA}>
        Don't have an account? <Text style={styles.agreeTextBold}>Sign up</Text>
      </Text>
    </ScrollView>
  );
}
