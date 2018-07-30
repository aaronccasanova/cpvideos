import React, { Component } from 'react';
import styled from 'styled-components';

import MainCard from './components/card/MainCard';
import SocialIcons from './components/social/SocialIcons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 20px 20px 60px;
  background: #f7f7f7;

  h5 {
    text-align: center;
    color: #bebebe;
    letter-spacing: 3px;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <MainCard />
        <div>
          <SocialIcons />
          <h5>@cpcomponents</h5>
        </div>
      </Wrapper>
    );
  }
}

export default App;
