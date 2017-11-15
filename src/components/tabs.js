/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React, { Component } from 'react';
import { Container, Tab } from 'semantic-ui-react';
import UsersTable from './users-table';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleMap = (data) => {
    this.setState({address: data.address})
  }

  render() {
    const { users, loading } = this.props;
    const panes = [
      {
        menuItem: { key: 'users', icon: 'users', content: 'Users' },
        render: () =>
          <Tab.Pane loading={loading}>
            <UsersTable data={users} handleMap={this.handleMap} adr={this.state.address}/>
          </Tab.Pane>,
      },
      {
        menuItem: {key: 'messages', icon: 'detective', content: 'Gif'},
        render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
      },
    ]

    return (
      <Container>
        <Tab panes={panes} />
      </Container>
    );
  }
}


export default Tabs;
