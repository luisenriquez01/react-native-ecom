import {StyleSheet} from 'react-native';
import {colors} from '../../../util/colors';

export const styles = StyleSheet.create({
  agreeRow: {
    flexDirection: 'row',
  },
  agreeText: {
    color: colors.blue,
    marginLeft: 4,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 20,
  },
  container: {
    padding: 24,
  },
  signInCTA: {
    marginTop: 16,
    textAlign: 'center',
  },
});
