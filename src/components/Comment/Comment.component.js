import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import RepliesDropdown from '../Dropdowns/RepliesDropdown/RepliesDropdown.component';
import ActionIcon from '../ActionIcon/ActionIcon.component';

const Comment = ({ item }) => {
  const {
    profile,
    comment,
    username,
    duration,
    likes,
    numOfReplies,
    replies,
    likedByCreator,
  } = item;
  const [isLiked, setIsLiked] = useState(false);
  const onLikePress = () => {
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Image source={profile} style={styles.profileImage} />
        <View style={styles.texts}>
          <Text style={styles.username}>{username}</Text>
          <View style={styles.comment}>
            <Text>{comment}</Text>
            <Text style={styles.duration}>{duration}</Text>
          </View>
          <RepliesDropdown
            renderHeader={() => (
              <View style={styles.viewRepliers}>
                <Text style={styles.viewText}>
                  View Replies ({numOfReplies})
                </Text>
                <EvilIcons name='chevron-down' size={20} />
              </View>
            )}
            replies={replies}
          />
        </View>
      </View>
      <ActionIcon
        renderIcon={() => (
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={18}
            color={isLiked ? 'red' : '#86878B'}
          />
        )}
        onPress={onLikePress}
        textStyle={{ color: '#86878B', fontSize: 12, fontWeight: 'normal' }}
      />
    </View>
  );
};

export default Comment;
