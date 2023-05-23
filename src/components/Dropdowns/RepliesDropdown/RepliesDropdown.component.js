import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles';
import Reply from '../../Reply/Reply.component';

const RepliesDropdown = ({ renderHeader, replies }) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={{ marginBottom: 8 }}
      >
        {renderHeader?.()}
      </TouchableOpacity>
      {visible && (
        <View style={styles.content}>
          {replies?.map((reply) => (
            <Reply
              key={reply.id}
              profile={reply.profile}
              comment={reply.comment}
              username={reply.username}
              duration={reply.duration}
              likedByCreator={reply.likedByCreator}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default RepliesDropdown;
