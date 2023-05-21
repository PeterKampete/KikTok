import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 50,
    width: Dimensions.get('window').width,
    flex: 1,
  },
  videoPlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
  },

  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  songImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 7,
    borderColor: '#4c4c4c',
    objectFit: 'contain',
  },
  // right container
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 6,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    objectFit: 'contain',
  },
});

export default styles;
