/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import { H1Section } from './styles';
import StatisticUI from './statistic-ui';

const Dashboard = (props) => {

  return (
    <Container>
      <H1Section> Dashboard </H1Section>
      <StatisticUI />
      <Grid columns={2} stackable >
        <Grid.Column >
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column >
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Dashboard;
