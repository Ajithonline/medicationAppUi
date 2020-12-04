import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {colors} from '../../../config/colors';
export const SecondaryInput = (props) => {
  const {placeHolder} = props;
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder={placeHolder}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: colors.bg,
    borderRadius: 15,
  },
  input: {
    padding: 20,
  },
});
