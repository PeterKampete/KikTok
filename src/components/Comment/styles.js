import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    marginVertical: 6,
    flexDirection: 'row',
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
    objectFit: 'contain',
  },
  texts: {
    marginLeft: 12,
  },
  username: {
    color: '#86878B',
    fontSize: 14,
    marginBottom: 5,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    fontSize: 22,
  },
  duration: {
    marginLeft: 5,
    color: '#86878B',
  },
  viewRepliers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewText: {
    color: '#86878B',
    fontSize: 14,
  },
});

export default styles;
