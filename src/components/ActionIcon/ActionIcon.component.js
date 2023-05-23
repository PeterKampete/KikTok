import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

const ActionIcon = ({
  text = '123',
  renderIcon,
  textStyle,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.iconContainer, { containerStyle }]}
      onPress={onPress}
    >
      {renderIcon?.()}
      <Text style={[styles.statsLabel, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ActionIcon;
