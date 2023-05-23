import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './styles';

const Reply = (props) => {
  const {
    profile,
    comment,
    username,
    duration,
    likes,
    numOfReplies,
    replies,
    likedByCreator,
  } = props;
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.profileImage} />
      <View style={styles.texts}>
        <Text style={styles.username}>{username}</Text>
        <View style={styles.comment}>
          <Text>{comment}</Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
        {likedByCreator && <Text style={styles.creatorLike}>Liked by creator</Text>}
      </View>
    </View>
  );
};

export default Reply;
