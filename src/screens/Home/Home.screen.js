import { View, Text, FlatList, Dimensions } from 'react-native';
import React, { useCallback } from 'react';
import Constants from 'expo-constants';

import { Reel } from '../../components';
import posts from '../../../assets/data/posts';

const Home = () => {
  const height = Constants.statusBarHeight;
  const renderItem = ({ item, index }) => {
    return <Reel item={item} />;
  };
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        snapToInterval={Dimensions.get('window').height + height}
        snapToAlignment='start'
        decelerationRate='fast'
      />
    </View>
  );
};

export default Home;
