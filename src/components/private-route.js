/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoaderUI from '../components/loader';

class PrivateRoute extends Component {

  render(){
    const { component: Component, ...rest} = this.props;
    const { auth: { isLoaded }} = this.props;
    if (!isLoaded) {
      return (<LoaderUI />);
    }
    return (
      <Route {...rest} render={ props => (
      this.props.auth && this.props.auth.uid ? ( <Component {...props}/>
      ) : (
        <Redirect to={{
        pathname: '/login',
        state: { from: this.props.location }
        }}/> )
    )} />
    );
  }
}

export default connect(({ firebase: { auth } }) => ({ auth }))(PrivateRoute);
