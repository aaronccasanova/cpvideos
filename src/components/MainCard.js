import React, { Component } from 'react';
import styled from 'styled-components';

import ComponentPlayground from './ComponentPlayground';

const Wrapper = styled.div`
  --card-min-width: calc(250px + (1200 - 250) * (100vw - 320px) / (1500 - 320));
  /* ---------For Editing Layout---------- */
  border: 1px solid #e6e6e6;
  /* color: #adadad; */
  border-radius: 4px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.09);
  background: #fafafa;
  /* ------------------------------------- */

  margin: 0 auto;
  min-width: var(--card-min-width);
`;

const Heading = styled.h2`
  text-align: center;
  padding: 20px 20px 10px;
  font-size: 22px;
  font-weight: bold;
  color: black;
  font-size: calc(20px + (40 - 20) * (100vw - 320px) / (1500 - 320));
`;

const CPSpan = styled.span`
  color: #bebebe;
  font-weight: lighter;
`;

const PlaygroundWrapper = styled.div`
  padding: 20px;
`;

class MainCard extends Component {
  render() {
    return (
      <Wrapper>
        <Heading>
          <CPSpan>CP</CPSpan>Components
        </Heading>
        <PlaygroundWrapper>
          <ComponentPlayground />
        </PlaygroundWrapper>
      </Wrapper>
    );
  }
}

export default MainCard;
