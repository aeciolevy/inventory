/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import { sideStyle } from './styles';

const SidebarUI = (props) => {
  const { visible, children } = props;
  return (
    <Sidebar.Pushable as={Segment} style={sideStyle} >
      <Sidebar
        as={Menu}
        animation="overlay"
        width="very thin"
        direction="left"
        visible={visible}
        icon="labeled"
        vertical
        size="mini"
        style={{ border: 'none'}}
      >
        <Menu.Item href="/listings" style={{ minWidth: 'unset' }} >
          <Icon name="address book" />
          Listing
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher style={{ background: 'none' }} >
        <Segment basic >
          { children }
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default SidebarUI;
