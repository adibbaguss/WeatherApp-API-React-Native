import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const CustomTextInput = ({
  text, // text
  onChange,
  multiline = false,
  placeholder,
  numberOfLines,
  borderRadius = 8,
}) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={styles.input}
      placeholder={placeholder} //
      onChangeText={onChange}
      defaultValue={text}
      borderRadius={borderRadius}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#DDDDDD',
    padding: 10,
  },
  container: {
    marginTop: 30,
  },
});

export default CustomTextInput;
