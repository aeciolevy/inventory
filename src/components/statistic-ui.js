import React from 'react';
import { Icon, Statistic } from 'semantic-ui-react';

const StatisticUI = (props) => {

  return (
    <Statistic.Group widths="four">
      <Statistic>
        <Statistic.Value>
          <Icon name='doctor' />
          15
        </Statistic.Value>
        <Statistic.Label>Users</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value text>
          Three
          <br />Thousand
        </Statistic.Value>
        <Statistic.Label>Transactions</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>
          <Icon name='first aid' />
          200
        </Statistic.Value>
        <Statistic.Label>Items</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>
          10
        </Statistic.Value>
        <Statistic.Label>Expire this week</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
};

export default StatisticUI;
