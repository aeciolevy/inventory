/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React, { Component } from 'react';
import { Container, Image, Tab, Segment } from 'semantic-ui-react';
import UsersTable from './users-table';
import SearchUI from './search';
import { gifStyle } from './styles';
import { gifData } from '../utils/general';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { loadingGIF: true, index: 0}
  }

  componentWillReceiveProps(nextProps) {
    const userWithKeys = nextProps.users.map( elem => { return {...elem, key: Math.random()}})
    this.setState({users: userWithKeys, filtered: userWithKeys})
  }

  handleMap = (data) => {
    this.setState({address: data.address})
  }

  handleFilter = result => {
    if (result.length > 0) {
      this.setState({filtered: result})
    } else {
      this.setState({filtered: this.state.users})
    }
  }

  handleImg = () => {
    const { index } = this.state;
    this.setState({ loadingGIF: false})
    setTimeout( () => {
      if (index >= gifData.length - 1){
        this.setState({index: 0, loadingGIF: true})
      } else {
        this.setState({index: index + 1, loadingGIF: true})
      }
    } ,4000)
  }

  render() {
    const { loading } = this.props;
    const panes = [
      {
        menuItem: { key: 'users', icon: 'users', content: 'Users' },
        render: () =>
          <Tab.Pane loading={loading}>
            <SearchUI source={this.state.users} filter={ result => this.handleFilter(result) } />
            <UsersTable data={this.state.filtered} handleMap={this.handleMap} adr={this.state.address}/>
          </Tab.Pane>,
      },
      {
        menuItem: {key: 'messages', icon: 'detective', content: 'Gif'},
        render: () =>
        <Tab.Pane loading={this.state.loadingGIF}>
          <Container>
            <Segment basic textAlign="center">
              {gifData[this.state.index].hashtag}
              <Image
                alt="gif"
                src={gifData[this.state.index].src}
                onLoad={ this.handleImg }
                style={gifStyle}
                centered
                />
            </Segment>
          </Container>
        </Tab.Pane>,
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
