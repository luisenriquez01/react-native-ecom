import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  eye: {
    height: 24,
    marginHorizontal: 16,
    width: 24,
  },
  input: {
    flexGrow: 2,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  inputContainer: {
    alignItems: 'center',
    borderColor: colors.gray,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
  },
  label: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
});
