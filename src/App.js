import React, { Component } from 'react';
import styled from 'styled-components';

import MainCard from './components/MainCard';
import SocialIcons from './components/Social/SocialIcons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px 20px 60px;
  background: #f9f9f9;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <MainCard />
        <SocialIcons />
      </Wrapper>
    );
  }
}

export default App;
