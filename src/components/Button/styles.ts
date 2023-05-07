import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 20,
    width: '100%',
  },
  innerText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
