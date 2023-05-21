import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
    flex: 1
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    flex: 1
  },
});

export default styles;
