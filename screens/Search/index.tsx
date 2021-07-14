import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import BookCard from '../../components/BookCard';
import SearchBar from '../../components/SearchBar';
import { MainContainer } from './styles';

export default function Search() {
  return (
    <>
      <ScrollView>
        <MainContainer>
          <SearchBar />
        </MainContainer>
        <BookCard />
      </ScrollView>
    </>
  );
}