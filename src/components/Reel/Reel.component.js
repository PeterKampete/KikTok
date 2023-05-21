import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import { Video, ResizeMode } from 'expo-av';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';
import ActionIcon from '../ActionIcon/ActionIcon.component';

const Reel = (props) => {
  const [post, setPost] = useState(props.post);
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isLiked, setIsLiked] = useState(false);

  const onPlayPausePress = () => {
    if (status.isPlaying) {
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
  };

  const onLikePress = () => {
    const likedToAdd = isLiked ? -1 : 1;
    setPost({ ...post, likes: post.likes + likedToAdd });
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            ref={video}
            style={styles.video}
            source={post.uri}
            resizeMode={ResizeMode.COVER}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(status)}
          />
          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePicture}
                source={post.user.imageUri}
              />
              <ActionIcon
                renderIcon={() => (
                  <AntDesign
                    name='heart'
                    size={22}
                    color={isLiked ? 'red' : 'white'}
                  />
                )}
                text={post.likes}
                onPress={onLikePress}
              />
              <ActionIcon
                renderIcon={() => (
                  <Fontisto name='commenting' size={22} color='white' />
                )}
                text={post.comments}
              />
              <ActionIcon
                renderIcon={() => (
                  <Fontisto name='share-a' size={22} color='white' />
                )}
                text={post.shares}
              />
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>
                <View style={styles.songRow}>
                  <Entypo name='beamed-note' size={22} color='white' />
                  <Text style={styles.songName}>{post.songName}</Text>
                </View>
              </View>
              <Image style={styles.songImage} source={post.songImage} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Reel;
