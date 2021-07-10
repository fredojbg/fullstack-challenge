import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Title, Heading, Card, Image, HeaderContainer, MoreBooks, Link, ReadingContainer } from './styles';

const video = require('../../assets/images/video.png');


const ReviewOfDays: React.FC = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <ReadingContainer>
      <HeaderContainer>
        <Title>Reviews of The Days</Title>
        <MoreBooks>
          <Link>All Video</Link>
        </MoreBooks>
      </HeaderContainer>
      <Card>
        <Video
          ref={video}
          style={{
            borderRadius: 3,
            width: '100%',
            height: 267,
          }}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls={false}
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </Card>
    </ReadingContainer>
  );
}

export default ReviewOfDays;