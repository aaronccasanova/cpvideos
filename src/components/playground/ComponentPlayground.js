import React, { Component } from 'react';
import styled from 'styled-components';

import DownButton from './DownButton';
import Icon from './toggleicon.png';
import Spacer from './margin.png';

const Wrapper = styled.div`
  position: relative;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background: #fdfdfd;
  width: 100%;
  min-height: calc(180px + (850 - 180) * (100vh - 320px) / (1500 - 320));

  display: ${props => (props.center ? 'flex' : null)};
  justify-content: ${props => (props.center ? 'center' : null)};
  align-items: ${props => (props.center ? 'center' : null)};

  padding: ${props => (props.spacer ? '20px' : null)};
`;

const IconWrapper = styled.div`
  position: absolute;
  /* top: -33px; */
  bottom: 100%;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleIcon = styled.div`
  /* transform-style: ${props => (props.center ? null : 'preserve-3d')}; */
  transform: ${props => (props.center ? 'rotateY(180deg)' : 'rotateX(180deg)')};
  transition: all 250ms;

  * {
    width: calc(21px + (30 - 21) * (100vw - 320px) / (1500 - 320));
    opacity: 0.25;
  }
`;
const SpacerIcon = styled.div`
  padding-left: 10px;
  * {
    width: calc(21px + (30 - 21) * (100vw - 320px) / (1500 - 320));
    opacity: 0.25;
  }
`;

class ComponentPlayground extends Component {
  state = {
    center: true,
    spacer: true
  };

  toggleCenter = () => {
    this.setState(prevState => ({
      center: !prevState.center
    }));
  };

  toggleSpacer = () => {
    this.setState(prevState => ({
      spacer: !prevState.spacer
    }));
  };
  render() {
    return (
      <Wrapper center={this.state.center} spacer={this.state.spacer}>
        <IconWrapper>
          <ToggleIcon onClick={this.toggleCenter} center={this.state.center}>
            <img src={Icon} alt="Toggle Icon" />
          </ToggleIcon>
          <SpacerIcon onClick={this.toggleSpacer}>
            <img src={Spacer} alt="Toggle Icon" />
          </SpacerIcon>
        </IconWrapper>
        <DownButton
          btnColor="lightsteelblue"
          arrowColor="black"
          arrowHover="white"
        />
      </Wrapper>
    );
  }
}

export default ComponentPlayground;