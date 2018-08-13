import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Source';

const Wrapper = styled.div``;

class Usage extends Component {
  render() {
    return (
      <Wrapper>
        {/* --- Place Usage Code Below --- */}
        {/* <LeftyLoosy /> */}
        <Card
          grayscale
          size="300px"
          speed="350ms"
          title="Moose"
          subtitle="Wazanova"
          src="/moose.jpg"
        />
      </Wrapper>
    );
  }
}

export default Usage;
