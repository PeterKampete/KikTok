import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  profileImage: {
    width: 32,
    height: 32,
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
  creatorLike: {
    color: '#86878B',
    backgroundColor: '#F2F2F2',
    width: 'auto',
    padding: 5,
    fontSize: 12,
    width: 100,
    fontWeight: '600',
    borderRadius: 3,
    marginTop: 5,
  }
});

export default styles;
