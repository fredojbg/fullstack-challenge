import React from 'react';
import { View } from 'react-native';

import { MainContainer, Title, FormGroup, Input, InputArea, Label, Button, ButtonText } from './Styles';

const AddBook: React.FC = () => {
  return (
    <View>
      <MainContainer>
        <Title>Add a new book</Title>
        <FormGroup>
          <Label>Name</Label>
          <Input />
        </FormGroup>

        <FormGroup>
          <Label>Author</Label>
          <Input />
        </FormGroup>

        <FormGroup>
          <Label>Description</Label>
          <InputArea />
        </FormGroup>

        <Button>
          <ButtonText>Add new Book</ButtonText>
        </Button>
      </MainContainer>
    </View>
  );
}

export default AddBook;