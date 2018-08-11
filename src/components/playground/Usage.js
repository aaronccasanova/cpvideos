import React, { Component } from 'react';
import styled from 'styled-components';

import AniHeaderCard from './Source';

const Wrapper = styled.div``;

class Usage extends Component {
  render() {
    return (
      <Wrapper>
        {/* --- Place Usage Code Below --- */}
        {/* <LeftyLoosy /> */}

        {/* <AniHeaderCard text="wow" /> */}
        <AniHeaderCard text="love" />
        {/* <AniHeaderCard text="hello" /> */}
      </Wrapper>
    );
  }
}

export default Usage;
