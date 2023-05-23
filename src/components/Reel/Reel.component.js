import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Video, ResizeMode } from 'expo-av';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';
import ActionIcon from '../ActionIcon/ActionIcon.component';
import Modal from '../Modal/Modal.component';
import Comment from '../Comment/Comment.component';
import { FlatList } from 'react-native-gesture-handler';
import { comments } from '../../../assets/data/comments';
import Input from '../Input/Input.component';

const Reel = ({ item }) => {
  const [post, setPost] = useState(item);
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [shareVisible, setShareVisible] = useState(false);
  const shareModalHeight =
    Dimensions.get('window').height - Dimensions.get('screen').height / 2;

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
              <View>
                <Image
                  style={styles.profilePicture}
                  source={post?.user?.imageUri}
                />
                <AntDesign
                  name='pluscircle'
                  size={18}
                  color='#EA4359'
                  backgroundColor='#fff'
                  style={{
                    overflow: 'hidden',
                    borderRadius: 50,
                    top: 35,
                    left: 18,
                    position: 'absolute',
                  }}
                />
              </View>
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
                onPress={() => setVisible(true)}
              />
              <ActionIcon
                renderIcon={() => (
                  <Fontisto name='share-a' size={22} color='white' />
                )}
                text={post.shares}
                onPress={() => setShareVisible(true)}
              />
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>{post?.user.username}</Text>
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
      <Modal
        visible={visible}
        onRequestClose={() => setVisible(false)}
        onClose={() => setVisible(false)}
        heading='567 comments'
        textStyle={{ fontWeight: 'bold' }}
        headerStyle={{ marginBottom: 22 }}
        bgColor='#F5F5F4'
        renderExtraContent={() => (
          <View
            style={{
              backgroundColor: '#fff',
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}
          >
            <Input
              placeholder='Add a comment...'
              renderIconRight={() => (
                <View style={styles.inputActions}>
                  <TouchableOpacity>
                    <Entypo name='attachment' size={20} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Entypo
                      name='emoji-happy'
                      size={20}
                      style={{ marginLeft: 20 }}
                    />
                  </TouchableOpacity>
                </View>
              )}
              padding={20}
            />
          </View>
        )}
      >
        <FlatList
          data={comments}
          key={({ item }) => item.id}
          renderItem={({ item }) => <Comment item={item} />}
          showsVerticalScrollIndicator={false}
          style={{ height: '40%', marginBottom: 50 }}
        />
      </Modal>
      <Modal
        visible={shareVisible}
        onRequestClose={() => setShareVisible(false)}
        onClose={() => setShareVisible(false)}
        heading='Share to'
        textStyle={{ fontWeight: 'bold' }}
        headerStyle={{ marginBottom: 22 }}
        bgColor='#F5F5F4'
        height={shareModalHeight}
        renderExtraContent={() => (
          <View
            style={{
              backgroundColor: '#fff',
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}
          >
            <TouchableOpacity style={styles.cancel}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      >
        <View style={styles.shareIcons}>
          <Image source={require('../../../assets/images/share-whatsapp.png')} />
        </View>
        <Text>Sare to</Text>
      </Modal>
    </View>
  );
};

export default Reel;
