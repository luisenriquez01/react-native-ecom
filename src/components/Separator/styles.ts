import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  line: {
    backgroundColor: colors.lightGray,
    flex: 1,
    height: 1,
  },
  text: {
    color: colors.blue,
    fontWeight: '500',
    marginHorizontal: 8,
  },
});
