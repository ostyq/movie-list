import React from 'react';
import MovieDescription from './MovieDescription';
import MoviePhotos from './MoviePhotos';
import { Image } from 'semantic-ui-react';
import OfficialRating from './Ratings';

class MoviePage extends React.Component {
  render() {
    return (
      <div className="MoviePage">
        <div className="MoviePage-poster-holder">
          <Image
            size="medium"
            src={'https://st.kp.yandex.net/images/film_big/933307.jpg'}
            alt="movie poster"
            wrapped
            floated="left"
          />
        </div>
        <div className="MoviePage-content">
          <MovieDescription />
          <MoviePhotos />
          <OfficialRating />
        </div>
      </div>
    );
  }
}

export default MoviePage;
