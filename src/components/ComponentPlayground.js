import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background: #fdfdfd;
  width: 100%;
  min-height: calc(180px + (850 - 180) * (100vh - 320px) / (1500 - 320));
`;

const PlaygroundWrapper = styled.div``;

class ComponentPlayground extends Component {
  render() {
    return (
      <Wrapper>
        <PlaygroundWrapper>UsageCode</PlaygroundWrapper>
      </Wrapper>
    );
  }
}

export default ComponentPlayground;
