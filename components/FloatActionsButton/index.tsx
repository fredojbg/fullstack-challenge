import React from 'react';
import { View } from 'react-native';

import { ActionButton, Icon, Content, FloatButtons, Hr } from './styles';

const iconRead = require('../../assets/images/readicon.png');
const iconListen = require('../../assets/images/listenicon.png');
const iconShare = require('../../assets/images/shareicon.png');

const FloatActionsButton: React.FC = () => {
  return (
    <FloatButtons>
      <ActionButton>
        <Icon source={iconRead} />
        <Content>
          Read
        </Content>
      </ActionButton>
      <Hr />
      <ActionButton>
        <Icon source={iconListen} />
        <Content>
          Listen
        </Content>
      </ActionButton>
      <Hr />
      <ActionButton>
        <Icon source={iconShare} />
        <Content>
          Share
        </Content>
      </ActionButton>
    </FloatButtons>
  );
}

export default FloatActionsButton;