import React from 'react';
import { Share } from 'react-native';

import { ActionButton, Icon, Content, FloatButtons, Hr } from './styles';

const iconRead = require('../../assets/images/readicon.png');
const iconListen = require('../../assets/images/listenicon.png');
const iconShare = require('../../assets/images/shareicon.png');

const FloatActionsButton: React.FC = () => {
  const handleShareBook = async () => {
    // const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'E-book | Hooked',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }
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
      <ActionButton onPress={handleShareBook}>
        <Icon source={iconShare} />
        <Content>
          Share
        </Content>
      </ActionButton>
    </FloatButtons>
  );
}

export default FloatActionsButton;