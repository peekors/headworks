import React from 'react';
import Client from '../client/Client';
import { connect } from 'react-redux';
import { getClients } from '../../_reducers/reducers';

const Clients = props => {
  const { clients } = props;
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2>Clients List</h2>
            <table className="table table-hover">
              <thead>
              <tr>
                <th scope="col">Client</th>
                <th scope="col">Date</th>
              </tr>
              </thead>
              <tbody>
              {[...clients].reverse().map(client => (
                  <Client key={`${client.name}${client.lastName}`} data={client} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    clients: getClients(state),
  }
}

export default connect(
  mapStateToProps
)(Clients);