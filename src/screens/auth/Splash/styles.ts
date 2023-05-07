import {StyleSheet} from 'react-native';
import {colors} from '../../../util/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: 24,
    // borderWidth: 1,
  },
  footerText: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  imageSplash: {
    width: '100%',
    height: 200,
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  title: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    marginVertical: 54,
  },
});
