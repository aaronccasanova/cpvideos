import React, { Component } from 'react';
import styled from 'styled-components';

import YouTube from './social-icons/001-youtube.svg';
import Twitter from './social-icons/008-twitter.svg';
import Instagram from './social-icons/029-instagram.svg';

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: saturate(80%);
`;

const IconWrapper = styled.div`
  padding: 10px 20px;
`;

const Icon = styled.img`
  width: 23px;
  height: 23px;
`;

class SocialIcons extends Component {
  render() {
    return (
      <Wrapper>
        <IconWrapper>
          <Icon src={Twitter} alt="Twitter" />
        </IconWrapper>
        <IconWrapper>
          <Icon src={Instagram} alt="Instagram" />
        </IconWrapper>
        <IconWrapper>
          <Icon src={YouTube} alt="YouTube" />
        </IconWrapper>
      </Wrapper>
    );
  }
}

export default SocialIcons;
