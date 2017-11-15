/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React, { Component } from 'react';

const { google } = window;

class GoogleMap extends Component {
  componentDidMount () {
    new google.maps.Map(this.refs.map, {
      zoom: 15,
      center: {
        lat: Number(this.props.lat),
        lng: Number(this.props.lon)
      }
    });
  }

  render () {
    return <div style={{ width: '100%', height: '40vh' }} ref="map" />;
  }
}

export default GoogleMap;
