/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import GoogleMap from './google-map';

const Address = (props) => {
  const { geo, city, street } = props.address;
  return (
    <div style={{ padding: '30px' }}>
      <strong>City:</strong> {city}
      <br/>
      <strong> Street:</strong>  {street}
      <GoogleMap lat={geo.lat} lon={geo.lng} />
    </div>
  );
}

export default Address;
