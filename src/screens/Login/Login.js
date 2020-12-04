import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../config/colors';
import {SecondaryButton} from '../../components/buttons/SecondaryButton';
import {PrimaryInput} from '../../components/forms/PrimaryInput';
import {PrimaryButton} from '../../components/buttons/PrimaryButton';
export const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.vector1}
        source={require('../../../assets/images/vector1.png')}
      />
      <Image
        style={styles.vector2}
        source={require('../../../assets/images/vector2.png')}
      />
      <Image
        style={styles.vector3}
        source={require('../../../assets/images/vector3.png')}
      />
      <Image
        style={styles.vector4}
        source={require('../../../assets/images/vector4.png')}
      />
      <View styles={styles.contentContainer}>
        <Image
          style={styles.back}
          source={require('../../../assets/images/back.png')}
        />
        <Text style={styles.heading}>Welcome Back!</Text>
        <View style={styles.btnWrapper}>
          <View style={styles.btnItemWrapper}>
            <SecondaryButton
              label={'CONTINUE WITH FACEBOOK'}
              background={colors.facebookBg}
              fontColor={colors.white}
              btnType="FACEBOOK"
            />
          </View>
          <View style={styles.btnItemWrapper}>
            <SecondaryButton
              label={'CONTINUE WITH GOOGLE'}
              background={colors.white}
              btnType="GOOGLE"
              fontColor={colors.heading}
            />
          </View>
        </View>
        <Text style={styles.or}>OR LOG IN WITH EMAIL</Text>
        <View style={styles.inputItem}>
          <PrimaryInput placeHolder={'Email Address'} />
        </View>
        <View style={styles.inputItem}>
          <PrimaryInput placeHolder={'Password'} />
        </View>
        <View style={styles.loginBtnWrapper}>
          <PrimaryButton label={'LOG IN'} />
        </View>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>
      <View style={styles.footerWrapper}>
        <Text style={styles.footerText}>
          <Text style={styles.footerText1}>ALREADY HAVE AN ACCOUNT?</Text>
          <Text style={styles.footerText2}>SIGN UP</Text>
        </Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
  },
  vector1: {
    position: 'absolute',
    left: -10,
    top: -5,
  },
  vector2: {
    position: 'absolute',
    right: -6,
  },
  vector3: {
    position: 'absolute',
    top: 90,
  },
  vector4: {
    position: 'absolute',
    right: 0,
    top: 90,
  },
  contentContainer: {
    flex: 1,
  },
  back: {
    marginTop: 50,
  },
  heading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 40,
    textAlign: 'center',
    color: colors.heading,
  },
  btnWrapper: {
    marginTop: 30,
  },
  btnItemWrapper: {
    marginBottom: 20,
  },
  or: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 30,
    color: colors.gray,
  },
  inputItem: {
    marginBottom: 20,
  },
  loginBtnWrapper: {
    marginTop: 10,
  },
  forgotPassword: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  footerText: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    fontSize: 14,
  },
  footerText1: {
    color: colors.gray,
  },
  footerText2: {
    color: colors.primary,
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
