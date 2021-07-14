import styled from 'styled-components/native';

export const BookContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Book = styled.View`
  width: 90px;
  margin: 17px;
`;
export const Image = styled.Image`
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 5px;
  width: 105px;
  height: 153px;
`;
export const Title = styled.Text`
  /* font-family: SF Pro Display; */
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  margin-top: 9px;
  
  color: rgba(49, 49, 49, 0.8);
`;

export const Author = styled.Text`
  /* font-family: Roboto; */
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 12px;
  color: rgba(49, 49, 49, 0.8);
  margin-top: 5px;
`;