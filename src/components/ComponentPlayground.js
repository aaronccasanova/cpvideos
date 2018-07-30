import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #e6e6e6;
  background: #fff;
  min-width: calc(200px + (1200 - 200) * (100vw - 320px) / (1500 - 320));
  min-height: calc(180px + (1200 - 180) * (100vh - 320px) / (1500 - 320));
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
