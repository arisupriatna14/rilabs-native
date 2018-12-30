import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './FormInput.style';

const FormInput = (props) => {
  const { placeholder, secureTextEntry } = props;
  return (
    <View style={styles.container}>
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
