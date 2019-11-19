import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMeoFact, getMeoFactError, getMeoFactPending } from '../../_reducers/reducers';
import { fetchMeoFact } from './fetchMeoFact';
import { bindActionCreators } from 'redux';

class MeoFact extends Component {
  componentDidMount() {
    this.props.fetchMeoFact();
  }

  render() {
    const {fetchMeoFact: fetchMeoFact1, fact} = this.props;
    return (
      <div className="alert alert-light mt-3">
        <h5>Meo fact</h5>
        <p>{fact}</p>
        <button className="btn btn-outline-secondary btn-sm btn-block" onClick={fetchMeoFact1}>Want more</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fact: getMeoFact(state),
    pending: getMeoFactPending(state),
    error: getMeoFactError(state),
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMeoFact,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeoFact);