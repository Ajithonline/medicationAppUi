import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../config/colors';

export const CourseDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailsImageWrapper}>
        <Image source={require('../../../assets/images/courseSun.png')} />
        <View style={styles.headerWrapper}>
          <View style={styles.headerLeftWrapper}>
            <Image source={require('../../../assets/images/backWhite.png')} />
          </View>
          <View style={styles.headerRightWrapper}>
            <Image source={require('../../../assets/images/heart.png')} />
            <Image
              style={{marginLeft: 15}}
              source={require('../../../assets/images/download.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Happy Morning</Text>
        <Text style={styles.subHeading}>COURSE</Text>
        <Text style={styles.courseDescription}>
          Ease the mind into a restful night’s sleep with these deep, amblent
          tones.
        </Text>
        <View style={styles.analyticsWrapper}>
          <View style={styles.analyticsSection}>
            <Image source={require('../../../assets/images/favourite.png')} />
            <Text style={styles.analyticsText}>24.234 Favorits</Text>
          </View>
          <View style={styles.analyticsSection}>
            <Image source={require('../../../assets/images/headphone.png')} />
            <Text style={styles.analyticsText}>34.234 Lestening</Text>
          </View>
        </View>

        <View style={styles.voicesWrapper}>
          <Text style={styles.heading}>Pick a Nnrrator</Text>
          <View style={styles.voicesContentWrapper}>
            <View style={styles.switchWrapper}>
              <TouchableOpacity style={styles.enabledSwitch}>
                <Text style={styles.switchLabel1}>MALE VOICE</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.switchLabel2}>FEMALE VOICE</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.voiceItemWrapper}>
            <Image source={require('../../../assets/images/playEnabled.png')} />
            <View style={styles.voicesRight}>
              <Text style={styles.voiceTitle}>Focus Attention</Text>
              <Text style={styles.subTitle}>10 MIN</Text>
            </View>
          </View>
          <View style={styles.voiceItemWrapper}>
            <Image
              source={require('../../../assets/images/playDisabled.png')}
            />
            <View style={styles.voicesRight}>
              <Text style={styles.voiceTitle}>Focus Attention</Text>
              <Text style={styles.subTitle}>10 MIN</Text>
            </View>
          </View>
          <View style={styles.voiceItemWrapper}>
            <Image
              source={require('../../../assets/images/playDisabled.png')}
            />
            <View style={styles.voicesRight}>
              <Text style={styles.voiceTitle}>Focus Attention</Text>
              <Text style={styles.subTitle}>10 MIN</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  detailsImageWrapper: {
    display: 'flex',
    flex: 1,
  },
  headerWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 30,
    position: 'absolute',
  },
  headerLeftWrapper: {
    flex: 1,
  },
  headerRightWrapper: {
    flexDirection: 'row',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.heading,
    fontFamily: 'HelveticaNeue',
  },
  subHeading: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue',
    marginTop: 15,
    color: colors.gray,
  },
  courseDescription: {
    fontSize: 16,
    fontFamily: 'HelveticaNeue',
    marginTop: 15,
    fontWeight: '300',
    color: colors.gray,
  },
  analyticsWrapper: {
    flexDirection: 'row',
  },
  analyticsSection: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 30,
  },
  analyticsText: {
    color: colors.gray,
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    marginLeft: 5,
  },
  voicesWrapper: {
    marginTop: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.heading,
    fontFamily: 'HelveticaNeue',
  },
  voicesContentWrapper: {
    marginTop: 25,
  },
  switchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  switchLabel1: {
    color: colors.primary,
    padding: 15,
    fontSize: 16,
  },
  switchLabel2: {
    color: colors.gray,
    padding: 15,
    fontSize: 16,
  },
  enabledSwitch: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 0.5,
  },
  voiceItemWrapper: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  voicesRight: {
    marginLeft: 15,
  },
  voiceTitle: {
    fontSize: 16,
    color: colors.heading,
    fontFamily: 'HelveticaNeue',
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: 'HelveticaNeue',
    fontSize: 11,
    color: colors.gray,
  },
});
