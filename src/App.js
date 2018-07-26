import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import DownButton from './DownButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 96vh;
`;

const ExampleWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconCreditWrapper = styled.div`
  font-size: 10px;
  > * {
    font-size: 10px;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CPComponents</h1>
        </header>

        <ExampleWrapper>
          <DownButton
            btnColor="lightsteelblue"
            arrowColor="black"
            arrowHover="white"
          />
        </ExampleWrapper>

        <IconCreditWrapper>
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/google"
            title="Cut content button"
          >
            Cut content button
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{' '}
          is licensed by{' '}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
          >
            CC 3.0 BY
          </a>
        </IconCreditWrapper>
      </Wrapper>
    );
  }
}

export default App;
