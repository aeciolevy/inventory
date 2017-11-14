/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import logo from '../imgs/logo.png';
import '../App.css';

const MenuUI = (props) => {
  const { activeItem, handleItemClick, hidden } = props;
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
    </Menu>
  );
};

export default MenuUI;
