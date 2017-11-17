import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const LoaderUI = (props) => (
  <Segment style={{ height: '100vh', }}>
    <Dimmer active style={{ height: '100vh', }}>
      <Loader >Loading...</Loader>
    </Dimmer>
  </Segment>
)

export default LoaderUI;
