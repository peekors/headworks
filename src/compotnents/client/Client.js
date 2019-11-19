import React from 'react';

const Client = props => {
  const {date, lastName, firstName} = props.data;
  return (
    <tr>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{date}</td>
    </tr>
  );
};

export default Client;