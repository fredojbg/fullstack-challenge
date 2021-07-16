import styled from 'styled-components/native';

export const Input = styled.TextInput`
  height: 48px;
  width: 100%;
  border-radius: 10px;
  background: #FDFCFC;
  font-size: 16px;
  line-height: 18px;
  padding-left: 41px;
  color: #54565A;
  font-size: 16px;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
`;

export const SearchContainer = styled.View`
  border-radius: 15px;
  border: solid 1px #efefef;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonSearch = styled.TouchableOpacity`
  position: absolute;
  top: 18px;
  left: 15px;
`;
export const Image = styled.Image`
  width: 18px
`;