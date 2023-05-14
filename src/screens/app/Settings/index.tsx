import React from 'react';
import {Text, View} from 'react-native';
import withSafeAreaLayout from '../../../hoc/withSafeAreaLayout';

import {styles} from './styles';

function Settings(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}

export default React.memo(withSafeAreaLayout(Settings));
