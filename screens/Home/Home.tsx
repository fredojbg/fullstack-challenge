import * as React from 'react';
import HelloUser from '../../components/HelloUser';
import SearchBar from '../../components/SearchBar';
import { MainContainer } from './Styles';

export default function Home() {
  return (
    <MainContainer>
      <SearchBar />
      <HelloUser />
    </MainContainer>
  );
}