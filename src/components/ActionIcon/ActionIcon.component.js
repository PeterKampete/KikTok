import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

const ActionIcon = ({ text = '123', renderIcon, onPress }) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      {renderIcon?.()}
      <Text style={styles.statsLabel}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ActionIcon;
