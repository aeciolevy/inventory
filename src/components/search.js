import _ from 'lodash';
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react'

class SearchUI extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => {
    this.setState({ isLoading: false, results: [], value: '' })
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.name, results: result })
    this.props.filter([result])
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) {
        this.props.filter([])
        return this.resetComponent()
      }
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)
      this.setState({
        isLoading: false,
        results: _.filter(this.props.source, isMatch),
      })
      this.props.filter(this.state.results)
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        minCharacters={2}
        resultRenderer={ data => <span> {data.name} </span> }
        style={{ padding: '0 0 20px 0' }}
      />
    )
  }
}

export default SearchUI;
