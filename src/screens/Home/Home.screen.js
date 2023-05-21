import { View, Text } from 'react-native';
import React from 'react';
import { Reel } from '../../components';
import { reelData } from '../../../assets/data/reelData';

const Home = () => {
  return (
    <View>
      <Reel post={reelData[0]} />
    </View>
  );
};

export default Home;
