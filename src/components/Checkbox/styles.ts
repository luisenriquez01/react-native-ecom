import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  checkIcon: {
    height: 9,
    width: 12,
  },
  container: {
    borderColor: colors.gray,
    borderRadius: 4,
    borderWidth: 1,
    height: 22,
    width: 22,
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: colors.gray,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
