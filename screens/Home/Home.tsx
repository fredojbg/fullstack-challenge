import * as React from 'react';
import SearchBar from '../../components/SearchBar';
import { MainContainer } from './Styles';

export default function Home() {
  return (
    <MainContainer>
      <SearchBar />
    </MainContainer>
  );
}