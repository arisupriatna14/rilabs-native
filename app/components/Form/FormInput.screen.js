import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './FormInput.style';

const FormInput = (props) => {
  const { title, placeholder, secureTextEntry } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <TextInput
        autoCapitalize="none"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.inputStyle}
      />
    </View>
  );
};

export default FormInput;
