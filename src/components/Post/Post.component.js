import { View, Text, Touchable, TouchableWithoutFeedback } from 'react-native';
import React, { useRef, useState } from 'react';

import { Video, ResizeMode } from 'expo-av';
import styles from './styles';

const Post = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const uri =
    'https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_1MB.mp4';

  const onPlayPausePress = () => {
    if (status.isPlaying) {
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri,
          }}
          resizeMode={ResizeMode.COVER}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(status)}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
