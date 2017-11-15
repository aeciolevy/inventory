/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../action/actions';
import MenuUI from '../components/menu-ui';
import Tabs from '../components/tabs';

class Listing extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render () {
    const { users } = this.props;
    const load = users.length > 0 ? false : true;
    return (
      <div>
        <MenuUI hidden />
        <Tabs users={users} loading={load} />
      </div>
    );
  }
};

function mapStateToProps ({users}) {
  return {users};
}

export default connect(mapStateToProps, {fetchUsers} )(Listing);
