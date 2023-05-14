import React from 'react';
import {Text, View} from 'react-native';
import withSafeAreaLayout from '../../../hoc/withSafeAreaLayout';

import {styles} from './styles';

function Home(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

export default React.memo(withSafeAreaLayout(Home));
