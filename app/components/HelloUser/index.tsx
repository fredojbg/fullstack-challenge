import React from 'react';
import { GreetingsContainer, HelloText, UserNameText, Image } from './styles';


const hiIcon = require('../../assets/images/hi.png')

const HelloUser: React.FC = () => {
  return (
    <GreetingsContainer>
      <HelloText>Hi,</HelloText>
      <UserNameText> Mehmed Al Fatih </UserNameText>
      <Image source={hiIcon} />
    </GreetingsContainer>
  );
}

export default HelloUser;