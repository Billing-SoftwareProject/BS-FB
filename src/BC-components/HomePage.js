import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import PaymentsPage from './PaymentsPage';
import '../BC-css/Navbar.css';
import '../BC-css/Homepage.css';

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/payments" className="nav-link">
              Payments
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/payments" component={PaymentsPage} />
      </Switch>
    </Router>
  );
};

export default Navbar;
