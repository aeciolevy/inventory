/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Icon, Grid, Statistic } from 'semantic-ui-react';

const StatisticUI = (props) => {

  return (
    <Grid doubling columns={4}>
      <Grid.Row stretched>
        <Grid.Column>
          <Statistic>
            <Statistic.Value>
              <Icon name="doctor" />
              15
            </Statistic.Value>
            <Statistic.Label>Users</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic>
            <Statistic.Value text>
              Three
              <br />Thousand
            </Statistic.Value>
            <Statistic.Label>Transactions</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic>
            <Statistic.Value>
              <Icon name="first aid" />
              200
            </Statistic.Value>
            <Statistic.Label>Items</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic>
            <Statistic.Value>
              10
            </Statistic.Value>
            <Statistic.Label>Expire this week</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default StatisticUI;
