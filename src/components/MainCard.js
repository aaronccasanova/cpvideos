import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* ---------For Editing Layout---------- */
  border: 2px solid blue;
  /* ------------------------------------- */

  margin: 0 auto;
  width: calc(250px + (1200 - 250) * (100vw - 320px) / (1500 - 320));
  height: calc(220px + (1200 - 220) * (100vh - 320px) / (1500 - 320));
`;

class MainCard extends Component {
  render() {
    return (
      <Wrapper>
        <h2>hello</h2>
      </Wrapper>
    );
  }
}

export default MainCard;
