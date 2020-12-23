import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/colors';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FCFCFC',
    padding: 20,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRightBtnsWrapper: {
    flexDirection: 'row',
  },
  songContent: {
    alignItems: 'center',
    marginTop: '80%',
  },
  title: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    fontSize: 34,
    color: colors.heading,
  },
  subTitle: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    fontSize: 14,
    color: colors.gray,
    marginTop: 15,
  },
  playerControlWrapper: {},
  playerControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '15%',
  },
  progressBar: {
    marginTop: '10%',
  },
  bar: {
    height: 1,
    backgroundColor: colors.gray,
  },
  progressDot: {
    marginLeft: Dimensions.get('window').width / 2,
    width: 15,
    height: 15,
    position: 'absolute',
    top: -5,
  },
  progressCompleted: {
    backgroundColor: colors.heading,
    height: 1,
    marginRight: Dimensions.get('window').width / 2 - 40,
  },
  bgImage1: {
    position: 'absolute',
  },
  bgImage2: {
    position: 'absolute',
    right: 0,
  },
  bgImage3: {
    position: 'absolute',
    bottom: 0,
  },
  timerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
