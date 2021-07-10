import * as React from 'react';
import DiscoverBooks from '../../components/DiscoverBooks';
import HelloUser from '../../components/HelloUser';
import CurrentReading from '../../components/ReadingCurrent';
import SearchBar from '../../components/SearchBar';
import { MainContainer } from './Styles';

export default function Home() {
  return (
    <>
      <MainContainer>
        <SearchBar />
        <HelloUser />
      </MainContainer>
      <DiscoverBooks />
      <CurrentReading />

    </>
  );
}