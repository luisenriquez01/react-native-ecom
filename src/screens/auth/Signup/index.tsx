import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';

import {styles} from './styles';

export default function SignUp(): React.JSX.Element {
  const [checked, setChecked] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <AuthHeader onPress={() => console.log('Auth press')} title="Sign up" />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="email@example.com" />
      <Input isPassword label="Password" placeholder="**********" />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onPress={() => setChecked(pc => !pc)} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms</Text> &
          <Text style={styles.agreeTextBold}> Privacy</Text>
        </Text>
      </View>
      <Button onPress={() => null} style={styles.button} title="Sign up" />
      <Separator label="Or sign up with" />
      <GoogleLogin />
      <Text style={styles.signInCTA}>
        Already have an account?{' '}
        <Text style={styles.agreeTextBold}>Sign in</Text>
      </Text>
    </ScrollView>
  );
}
