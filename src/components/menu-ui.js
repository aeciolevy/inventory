/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Menu, Icon } from 'semantic-ui-react';
import logo from '../imgs/logo.png';
import '../App.css';

const MenuUI = (props) => {
  const { activeItem, handleItemClick, hidden, firebase } = props;
  return (
    <Menu stackable secondary>
      <Menu.Item href="/" style={{ background: 'none' }}>
        <img alt="logo" src={logo} style={{ width: '7.5rem' }} />
      </Menu.Item>
      { !hidden ? <Menu.Item
        name='sidebar'
        active={activeItem === 'sidebar'}
        onClick={handleItemClick}
      >
        <Icon name="list layout" />
      </Menu.Item> : null}
      <Menu.Item position="right" onClick={() => firebase.logout()}>
      Sign out
      </Menu.Item>
    </Menu>
  );
};

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
)(MenuUI);
