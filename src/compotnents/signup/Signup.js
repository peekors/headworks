import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerClient } from '../../_actions/actions';
import { getDate } from '../../_helpers/helperFunctions';
import MeoFact from '../meoFact/MeoFact';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
     client: {
       firstName: '',
       lastName: '',
       gender: 'Male',
       loyalty: 'none',
       creditCard: '',
       date: '',
     },
     validation: {
       message: 'Client was added to database',
       messageVisible: false,
     }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showMessage = this.showMessage.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    console.log(evt.target.value)
    this.setState({
      ...this.state,
      client: {
        ...this.state.client,
        [evt.target.name]: value,
      }
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.setState({
        ...this.state,
        client: {
          ...this.state.client,
          date: getDate()
        },
      },
      () => {
        this.props.addClient(this.state.client);
        this.showMessage();
        
        this.setState({
          client: {
            firstName: '',
            lastName: '',
            gender: 'Male',
            loyalty: 'none',
            creditCard: '',
            date: '',
          }
        })
      }
    )
  }
  
  showMessage() {
    this.setState({
      ...this.state,
      validation: {
        ...this.state.validation,
        messageVisible: true,
      }
    }, () => setTimeout(() => (
      this.setState({
        ...this.state,
        validation: {
          ...this.state.validation,
          messageVisible: false,
        }
      })
    ), 2000))
  }

  render() {
    return (
      <section className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <h2 className="mb-3">New client</h2>

              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="client-name">First name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Johny"
                    name="firstName"
                    id="client-name"
                    value={this.state.client.firstName}
                    onChange={this.handleChange}
                    pattern=".{2,15}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="client-surname">Last name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Walker"
                    name="lastName"
                    id="client-surname"
                    value={this.state.client.lastName}
                    onChange={this.handleChange}
                    pattern=".{2,15}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="client-gender">Gender</label>
                  <select
                    className="form-control"
                    id="client-gender"
                    name="gender"
                    onChange={this.handleChange}
                    value={this.state.client.gender}
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="client-loyalty">Loyalty program</label>
                  <select
                    className="form-control"
                    id="client-loyalty"
                    name="loyalty"
                    onChange={this.handleChange}
                    value={this.state.client.loyalty}
                  >
                    <option value="none">Unavailable</option>
                    <option value="creditCard">Credit card</option>
                    <option value="mobileApp">Mobile app</option>
                  </select>
                </div>
                {this.state.client.loyalty === 'creditCard'
                  ? (
                    <div className="form-group">
                      <label htmlFor="client-card">Credit card number</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="xxxx xxxx xxxx xxxx"
                        name="creditCard"
                        id="client-card"
                        value={this.state.client.creditCard}
                        onChange={this.handleChange}
                        pattern="[0-9]{13,16}"
                      />
                    </div>
                  )
                  : null
                }
                <button className="btn btn-primary btn-block" type="submit">Register client</button>
              </form>
              
              <div className={`alert alert-success mt-3 ${this.state.validation.messageVisible ? 'show' : 'fade'}`}>
                {this.state.validation.message}
                <button
                  type="button"
                  className="close"
                >
                  <span>&times;</span>
                </button>
              </div>
              
              <MeoFact />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Signup.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    addClient: client => dispatch(registerClient(client))
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Signup);