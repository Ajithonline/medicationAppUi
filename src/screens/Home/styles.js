import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
  },
  header: {},
  heading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
  },
  subHeading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 20,
    fontWeight: '300',
    marginTop: 10,
  },
  sectionWrapper1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  item1: {
    backgroundColor: '#8E97FD',
    flex: 1,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  item2: {
    backgroundColor: '#FFC97E',
    flex: 1,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  basicImg: {
    alignSelf: 'flex-end',
  },
  cardContent: {
    position: 'absolute',
    top: '35%',
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue',
  },
  cardSubTitle: {
    marginTop: 10,
    fontSize: 11,
  },
  cardFooterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: '0%',
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 11,
    fontFamily: 'HelveticaNeue',
  },
  cardBtn: {
    borderRadius: 50,
  },
  btnLabel: {
    fontFamily: 'HelveticaNeue',
    fontSize: 12,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    color: colors.heading,
  },
  dailyThoughtsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.darkBg,
    alignItems: 'center',
    height: 95,
    borderRadius: 10,
    marginTop: 10,
  },
  bgShape1: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  bgShape2: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  bgShape3: {
    position: 'absolute',
    right: '40%',
    bottom: 0,
  },
  dailyTitle: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dailySubTitle: {
    color: colors.white,
    fontSize: 11,
    fontFamily: 'HelveticaNeue',
  },
  recommendWrapper: {
    marginTop: 40,
  },
  recommendTitle: {
    fontSize: 24,
    fontFamily: 'HelveticaNeue',
    color: colors.heading,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  recommedCard: {
    borderRadius: 10,
    width: 160,
    marginRight: 20,
  },
  recommednImgWrapper: {},
  recommentContentTitle: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    color: colors.heading,
    paddingTop: 10,
    paddingBottom: 5,
  },
  recommentContentSubTitle: {
    fontSize: 11,
    fontFamily: 'HelveticaNeue',

    color: colors.gray,
  },
});
