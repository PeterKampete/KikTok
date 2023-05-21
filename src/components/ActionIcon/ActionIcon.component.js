import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';

const ActionIcon = ({ text = '123', renderIcon }) => {
  return (
    <View style={styles.iconContainer}>
      {renderIcon?.()}
      <Text style={styles.statsLabel}>{text}</Text>
    </View>
  );
};

export default ActionIcon;
