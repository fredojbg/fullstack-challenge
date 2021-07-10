import React from 'react';
import { View } from 'react-native';
import { Image, ImageBook } from './styles';

const coverBack = require('../../assets/images/detailpageback.png');
const bookCover = require('../../assets/images/bookcover.png');

const Cover: React.FC = () => {
  return (
    <View style={{
      backgroundColor: '#FFF'
    }}>
      <Image source={coverBack} />
      <ImageBook source={bookCover} style={{
        width: 151,
        height: 234,
        position: 'absolute',
        top: 80,
        left: 114,
        right: 114
      }} />
    </View>
  );
}

export default Cover;