import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className='container'>
        <Link to='/' className='navbar-brand'>Headworks</Link>
        
        <ul className="navbar-nav mr-auto">
          <li className="nav-link">
            <Link className="nav-link" to='/'>
              About
            </Link>
          </li>
        </ul>
        
        <div className="ml-auto">
          <Link className="btn btn-outline-secondary mr-2" to='/signup'>Registration</Link>
          <Link className="btn btn-outline-primary" to='/clients'>Clients</Link>
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  
};

export default Navigation;