import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Cover from '../../components/Cover';
import FloatActionsButton from '../../components/FloatActionsButton';
import { AuthorName, Content, MainContainer, TitleItem, TitleItemBold } from './styles';


const BookDetail: React.FC = () => {
  return (
    <ScrollView>
      <Cover />
      <FloatActionsButton />
      <MainContainer>
        <TitleItem>
          <TitleItemBold>Hooked</TitleItemBold> : How to Build Habid-Forming Products
        </TitleItem>
        <AuthorName>
          Nir Eyal
        </AuthorName>
        {/* Markdown content */}
        <Content>
          How do successful companies create products people can’t put down? {'\n'}{'\n'}
          Why do some products capture widespread attention while others flop? {'\n'}{'\n'}
          Why do some products capture widespread attention while others flop? {'\n'} {'\n'}
          Why do some products capture widespread attention while others flop?
        </Content>
      </MainContainer>
    </ScrollView>
  );
}

export default BookDetail;