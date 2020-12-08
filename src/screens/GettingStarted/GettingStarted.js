import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {colors} from '../../config/colors';
import {PrimaryButton} from '../../components/buttons/PrimaryButton';
export const GettingStarted = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoImage}
          source={require('../../../assets/images/logoWhite.png')}
        />
      </View>
      <View style={styles.welcomeMessage}>
        <Text style={styles.heading}>Hi Afsar, Welcome</Text>
        <Text style={styles.subHeading}>to Silent Moon</Text>
        <Text style={styles.description}>
          Explore the app, Find some peace of mind to prepare for meditation.
        </Text>
      </View>
      <View style={styles.welcomeImageWrapper}>
        <Image
          style={styles.ellipse4}
          source={require('../../../assets/images/Ellipse4.png')}></Image>
        <Image
          style={styles.ellipse3}
          source={require('../../../assets/images/Ellipse3.png')}></Image>
        <Image
          style={styles.ellipse2}
          source={require('../../../assets/images/Ellipse2.png')}></Image>
        <Image
          style={{
            position: 'absolute',
            top: '25%',
            alignSelf: 'center',
          }}
          source={require('../../../assets/images/Ellipse1.png')}></Image>
        <Image
          style={styles.yogi}
          source={require('../../../assets/images/yogi.png')}
        />

        <Image
          style={styles.cloud}
          source={require('../../../assets/images/cloud.png')}
        />
        <Image
          style={styles.partialCloud}
          source={require('../../../assets/images/partialCloud.png')}
        />
        <Image
          style={styles.smallEllipse1}
          source={require('../../../assets/images/smallEllipse1.png')}
        />
        <Image
          style={styles.smallEllipse2}
          source={require('../../../assets/images/smallEllipse2.png')}
        />

        <View style={styles.bgBtn}></View>
        <View style={styles.bgWrapper}>
          <PrimaryButton
            background={colors.whiteShadeBg}
            color={colors.heading}
            label={'GET STARTED'}
          />
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 15,
    backgroundColor: colors.primary,
  },
  logoWrapper: {
    marginTop: 30,
  },
  logoImage: {
    alignSelf: 'center',
  },
  welcomeMessage: {
    marginTop: 75,
  },
  heading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 30,
    color: colors.whiteShade,
    fontWeight: '600',
    textAlign: 'center',
  },
  subHeading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 30,
    color: colors.whiteShade,
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: colors.whiteShade,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
    lineHeight: 20,
  },
  welcomeImageWrapper: {
    position: 'absolute',
    bottom: '5%',
  },
  ellipse4: {
    marginTop: 30,
  },
  ellipse3: {
    position: 'absolute',
    top: '13%',
  },
  ellipse2: {
    position: 'absolute',
    top: '20%',
    alignSelf: 'center',
  },
  yogi: {
    position: 'absolute',
    top: '11%',
    alignSelf: 'center',
  },
  cloud: {
    right: 0,
    position: 'absolute',
    top: '15%',
  },
  partialCloud: {
    left: 0,
    position: 'absolute',
    top: '10%',
  },
  smallEllipse1: {
    left: 25,
    position: 'absolute',
    top: '10%',
  },
  smallEllipse2: {
    left: 20,
    position: 'absolute',
    top: '0%',
  },
  bgBtn: {
    backgroundColor: colors.primary,
    height: '40%',
    bottom: 0,
    width: '100%',
    position: 'absolute',
  },
  bgWrapper: {
    position: 'absolute',
    bottom: '10%',
    width: '90%',
    alignSelf: 'center',
  },
});
