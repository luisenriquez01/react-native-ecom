import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 18,
    width: 18,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 54,
    paddingHorizontal: 16,
  },
});
