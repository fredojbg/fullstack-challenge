import React from 'react';
import { View } from 'react-native';

const imgBookCover = require('../../assets/images/bookcover.png');
const imgBookCover1 = require('../../assets/images/bookcover1.png');
const imgBookCover2 = require('../../assets/images/bookcover2.png');

import { BookContainer, Book, Image, Title, Author } from './styles';

const dataMock = [
  { id: 1, cover: imgBookCover2, title: 'The One Thing', author: 'Gary Keller' },
  { id: 2, cover: imgBookCover1, title: 'The One Thing', author: 'Gary Keller' },
  { id: 3, cover: imgBookCover, title: 'The One Thing', author: 'Gary Keller' },
  { id: 4, cover: imgBookCover2, title: 'The One Thing', author: 'Gary Keller' },
  { id: 5, cover: imgBookCover1, title: 'The One Thing', author: 'Gary Keller' },
  { id: 6, cover: imgBookCover, title: 'The One Thing', author: 'Gary Keller' },
  { id: 7, cover: imgBookCover2, title: 'The One Thing', author: 'Gary Keller' },
  { id: 8, cover: imgBookCover1, title: 'The One Thing', author: 'Gary Keller' },
  { id: 9, cover: imgBookCover, title: 'The One Thing', author: 'Gary Keller' },
]

const BookCard: React.FC = () => {
  return (
    <BookContainer>
      {
        dataMock?.map((item: any) => {
          return (
            <Book>
              <Image source={item.cover} />
              <Title>{item.title}</Title>
              <Author>by {item.author}</Author>
            </Book>
          )
        })
      }
    </BookContainer>
  );
}

export default BookCard;