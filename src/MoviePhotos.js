import React from 'react';
import { Image } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

const photos = [
  'https://pmcvariety.files.wordpress.com/2016/10/miss-sloane.jpg?w=1000',
  'https://www.weekendnotes.com/im/008/09/misssloanelecture.jpg',
  'https://nomoreworkhorse.files.wordpress.com/2017/04/misssloane.png?w=640',
  'http://cdn.collider.com/wp-content/uploads/2016/11/jessica-chastain-mark-strong.jpg',
];
const StyledImage = styled(Image)`
  width: 15%;
  height: 120px;
  object-fit: cover;
`;

const topMargin = {
    marginTop: '1rem'
  };

const MoviePhotos = () => (
  <Image.Group style={topMargin}>
    <StyledImage src={photos[0]} />
    <StyledImage src={photos[1]} />
    <StyledImage src={photos[2]} />
    <StyledImage src={photos[3]} />
  </Image.Group>
);

export default MoviePhotos;
