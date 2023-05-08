import React, {useCallback, useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

export default function Input({
  isPassword,
  label,
  placeholder,
}: MyProps): React.JSX.Element {
  const [visible, setVisible] = useState(false);

  const onEyePress = useCallback(() => {
    setVisible(prevState => !prevState);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={isPassword && !visible}
          style={styles.input}
        />
        {isPassword && (
          <Pressable onPress={onEyePress}>
            <Image
              source={
                visible
                  ? require('../../assets/eye.png')
                  : require('../../assets/eye-closed.png')
              }
              style={styles.eye}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

interface MyProps {
  isPassword?: boolean;
  label: string;
  placeholder: string;
}
