import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const Icon = styled.Image``;
export const Content = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1px;
  color: #3F4043;
  margin-left: 10px;
`;

export const FloatButtons = styled.View`
  position: absolute;
  bottom: 100px;
  width: 335px;
  height: 56px;
  left: 25px;
  flex-direction: row;
  justify-content: space-between;
  z-index: 12;
  background: #FFFFFF;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
`;

export const Hr = styled.View`
  width: 1px;
  height: 16px;
  margin-top: 20px;
  background-color: rgba(151, 151, 151, 0.2);
`;

