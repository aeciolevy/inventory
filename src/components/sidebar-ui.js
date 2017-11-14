/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const SidebarUI = (props) => {
  const { visible, children } = props;
  return (
    <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='slide along'
          width='thin'
          direction='left'
          visible={visible}
          icon='labeled'
          vertical
        >
          <Menu.Item name='home'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item name='gamepad'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item name='camera'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            { children }
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default SidebarUI;
