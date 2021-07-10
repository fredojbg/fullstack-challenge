import React from 'react';
import { ImageBackground, View } from 'react-native';
import { BooksCollections, Title, Image, HeaderContainer, MoreBooks, Link, DiscoverContainer, ImageDrop } from './styles';

const banner1 = require('../../assets/images/Banner.png');
const backgroundOval = require('../../assets/images/Oval.png');

const dataMock = [{
  id: 1,
  image: banner1,
},
{
  id: 2,
  image: banner1,
},
{
  id: 3,
  image: banner1,
}
]

const DiscoverBooks: React.FC = () => {
  return (
    <DiscoverContainer>
      <ImageDrop resizeMode="contain" style={{
        position: 'absolute',
        right: 0,
        top: 0,
      }} source={backgroundOval} />
      <HeaderContainer>
        <Title>Discover new book</Title>
        <MoreBooks>
          <Link>More</Link>
        </MoreBooks>
      </HeaderContainer>
      <BooksCollections
        data={dataMock}
        renderItem={({ item }) => <Image source={item.image} />}
        horizontal
        keyExtractor={item => item.id}
      />
    </DiscoverContainer>
  );
}

export default DiscoverBooks;