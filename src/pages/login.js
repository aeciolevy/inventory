/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { Button, Container, Icon, Grid, Segment } from 'semantic-ui-react';
import { butFace, loginStyle } from '../components/styles'

const LoginPage = ({ firebase, auth }) => {
  return (
    auth && auth.uid ?
    <Redirect to={{
      pathname: '/'
    }}/> :
    <Container >
      <Grid centered padded >
        <Segment padded style={loginStyle}>
          <h2> Login </h2>
          <GoogleButton onClick={() => firebase.login({ provider: 'google', type: 'popup' })} />
          <Button
            animated='fade'
            onClick={ () => firebase.login({provider: 'facebook', type: 'popup'})}
            color="facebook"
            style={butFace}
          >
            <Icon name="facebook f" />
            Sign-in with Facebook
          </Button>
        </Segment>
      </Grid>
    </Container>
  );
};

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
)(LoginPage);
