import {
  View,
  Text,
  Modal as RNModal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Modal = ({
  width = '100%',
  height,
  visible,
  onRequestClose,
  onClose,
  children,
  bgColor = '#fff',
  textStyle,
  headerStyle,
  padding = 20,
  renderExtraContent,
  heading,
}) => {
  return (
    <RNModal
      animationType='slide'
      transparent
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View
        style={[
          styles.container,
          {
            width,
            height: height ?? Dimensions.get('window').height - 150,
            backgroundColor: bgColor,
            padding,
          },
        ]}
      >
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            ...headerStyle,
          }}
        >
          <Text style={textStyle}>{heading}</Text>
          <TouchableOpacity
            onPress={onClose}
            style={{ position: 'absolute', right: 0 }}
          >
            <AntDesign name='close' size={18} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>{children}</View>
      </View>
      {renderExtraContent?.()}
    </RNModal>
  );
};

export default Modal;
