import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.heading,
  },
  description: {
    fontSize: 16,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    color: colors.gray,
  },
  meditateItem: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 25,
  },
  meditateItemWrapper: {
    margin: 10,
  },
  itemTitle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
  },
  meditateItemWrapperContainer: {
    marginTop: 30,
  },
  dailyThoughtsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.lightBg,
    alignItems: 'center',
    height: 95,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  bgShape1: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 10,
  },
  bgShape2: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderRadius: 10,
  },
  bgShape3: {
    position: 'absolute',
    right: '40%',
    bottom: 0,
  },
  dailyTitle: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    color: colors.heading,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dailySubTitle: {
    color: colors.heading,
    fontSize: 11,
    fontFamily: 'HelveticaNeue',
  },
  medicationTypeCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 0,
  },
  card1Txt: {
    fontFamily: 'HelveticaNeue',
    fontSize: 18,
    color: colors.white,
    position: 'relative',
    bottom: 35,
    left: 15,
    fontWeight: 'bold',
  },
});
