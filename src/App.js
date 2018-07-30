import React, { Component } from 'react';
import styled from 'styled-components';

import MainCard from './components/MainCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 60px 20px;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <MainCard />
      </Wrapper>
    );
  }
}

export default App;
