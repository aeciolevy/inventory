/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import MenuUI from './components/menu-ui';
import SidebarUI from './components/sidebar-ui';

class App extends Component {
  state = {};
  handleItemClick = (e, { name }) => {
    if (name === this.state.activeItem) {
      name = '';
    }
    this.setState({ activeItem: name, visible: !this.state.visible })
  }

  render () {
    const { activeItem, visible } = this.state
    return (
      <div>
        <MenuUI handleItemClick={this.handleItemClick} activeItem={activeItem}/>
        <SidebarUI visible={visible}>
          <h1> test </h1>
        </SidebarUI>
      </div>
    );
  }
}

export default App;
