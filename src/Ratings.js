import React from 'react';
import { Container, Divider, Header, Rating } from 'semantic-ui-react';
import styled from '../node_modules/styled-components';

const AgencyTitle = styled(Header)`
  display: inline-block;
  &&&&&& {
    margin-right: 1em;
  }
`;

const ExampleRating = styled(Rating)`
  margin-left: 1em;
  margin-top: 1em;
`;

const OfficialRating = () => (
  <div>
    <AgencyTitle as="h3">Rotten Tomatoes</AgencyTitle>
    <ExampleRating icon="star" defaultRating={7} maxRating={10} disabled />
  </div>
);

export default OfficialRating;
