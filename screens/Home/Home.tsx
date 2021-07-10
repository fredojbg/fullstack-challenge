import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import DiscoverBooks from '../../components/DiscoverBooks';
import HelloUser from '../../components/HelloUser';
import CurrentReading from '../../components/ReadingCurrent';
import ReviewOfDays from '../../components/ReviewOfDays';
import SearchBar from '../../components/SearchBar';
import { MainContainer } from './Styles';

export default function Home() {
  return (
    <>
      <ScrollView>
        <MainContainer>
          <SearchBar />
          <HelloUser />
        </MainContainer>
        <DiscoverBooks />
        <CurrentReading />
        <ReviewOfDays />
      </ScrollView>
    </>
  );
}