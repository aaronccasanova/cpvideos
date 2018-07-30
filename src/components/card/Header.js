import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to CPComponents</h1>
      </header>
    </div>
  );
};

export default Header;
