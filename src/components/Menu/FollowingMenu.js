import React from 'react';
import { Link } from 'react-router-dom';

const FollowingMenu = () => (
  <div className="ui large top fixed hidden menu">
    <div className="ui container">
      <a href="#sdff" className="active item">TECH</a>
      <a href="#sdf" className="item">POLITICS</a>
      <a href="#sdf" className="item">RELIGION</a>
      <a href="#sdf" className="item">FASHION</a>
      <div className="right menu">
        <div className="item">
          <Link to="/login">
            <span className="ui primary button ">
          Login
            </span>
          </Link>

        </div>
        <div className="item">
          <Link to="/signup">
            <span className="ui primary button theme-button-color">
          Sign Up
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default FollowingMenu;
