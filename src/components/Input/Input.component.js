import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import styles from './styles';

const Input = ({ placeholder, renderIcon, renderIconRight, padding = 10, ...props }) => {
  return (
    <View style={styles.container} {...props}>
      {renderIcon?.()}
      <TextInput
        style={[styles.input, { padding }]}
        placeholderTextColor='#86878B'
        placeholder={placeholder}
      />
      <View style={styles.iconRight}>{renderIconRight?.()}</View>
    </View>
  );
};

export default Input;
