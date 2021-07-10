import React from 'react';
import { View } from 'react-native';
import { ButtonSearch, Input, SearchContainer, Image } from './styles';

// import { Container } from './styles';

const searchIcon = require('../../assets/images/searchbar.png');

const SearchBar: React.FC = () => {
  return (
    <SearchContainer>
      <Input placeholder="Search book" placeholderTextColor="#54565A" />
      <ButtonSearch>
        <Image source={searchIcon} />
      </ButtonSearch>
    </SearchContainer>
  );
}

export default SearchBar;