import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Title, Heading, Card, Image, HeaderContainer, MoreBooks, Link, ReadingContainer } from './styles';

const currentReading = require('../../assets/images/currentReading.png');


const CurrentReading: React.FC = () => {
  return (
    <ReadingContainer>
      <HeaderContainer>
        <Title>Currently Reading</Title>
        <MoreBooks>
          <Link>All</Link>
        </MoreBooks>
      </HeaderContainer>
      <Card>
        <Image source={currentReading}></Image>
      </Card>
    </ReadingContainer>
  );
}

export default CurrentReading;