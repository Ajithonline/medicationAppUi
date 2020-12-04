import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  bg: {
    position: 'absolute',
  },
  contentContainer: {
    padding: 20,
    marginTop: 30,
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
  },
  welcomeImage: {
    marginTop: 50,
  },
  top: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  heading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 40,
    textAlign: 'center',
    color: colors.heading,
  },
  subHeading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 26,
    textAlign: 'center',
    color: colors.gray,
  },
  btnWrapper: {
    marginTop: 60,
  },
  loginLinkWrapper: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 90,
  },
  notificationContent: {
    color: colors.gray,
    fontSize: 14,
    fontFamily: 'HelveticaNeue',
  },
  link: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'HelveticaNeue',
  },
});
