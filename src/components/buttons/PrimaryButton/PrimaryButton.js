import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
export const PrimaryButton = (props) => {
  const {label} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  btn: {
    backgroundColor: colors.primary,
    borderRadius: 30,
  },
  label: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: colors.white,
    fontFamily: 'HelveticaNeue',
    padding: 20,
  },
});
