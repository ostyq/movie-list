import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

const MovieDescription = () => (
  <div>
    <Container textAlign="justified">
      <Header as="h1">Miss Sloane</Header>
      <Divider />
      <p>
        In the high-stakes world of political power-brokers, Elizabeth Sloane
        (Jessica Chastain) is the most sought after and formidable lobbyist in
        D.C. Known equally for her cunning and her track record of success, she
        has always done whatever is required to win. But when she takes on the
        most powerful opponent of her career, she finds that winning may come at
        too high a price.
      </p>
    </Container>
  </div>
);

export default MovieDescription;
