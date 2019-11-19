import React from 'react';
import PropTypes from 'prop-types';

const Client = props => {
  return (
    <tr>
      <td>{`${props.data.firstName} ${props.data.lastName}`}</td>
      <td>{props.data.date}</td>
    </tr>
  );
};

Client.propTypes = {};

export default Client;