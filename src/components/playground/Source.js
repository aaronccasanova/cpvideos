import React from 'react';
import styled, { css } from 'styled-components';

const HoverAreaWrapper = styled.div`
  /* border: 2px solid red; */
  --card-width: ${props => (props.cardWidth ? props.cardWidth : '300px')};
  --card-height: ${props => (props.cardHeight ? props.cardHeight : '300px')};
  --front-background: ${props =>
    props.frontBackground ? props.frontBackground : '#DEDEDE'};
  --back-background: ${props =>
    props.backBackground ? props.backBackground : '#BABABA'};
  --front-img: ${props => (props.frontImg ? `url(${props.frontImg})` : '')};
  --back-img: ${props => (props.backImg ? `url(${props.backImg})` : '')};
  --front-layer1: ${props =>
    props.frontLayer1 ? props.frontLayer1 : 'translateZ(35px)'};
  --front-layer2: ${props =>
    props.frontLayer2 ? props.frontLayer2 : 'translateZ(95px)'};
  --front-layer3: ${props =>
    props.frontLayer3 ? props.frontLayer3 : 'translateZ(120px)'};
  --outline-padding: ${props =>
    props.outlinePadding ? props.outlinePadding : '20px'}
  --outline-border: ${props =>
    props.outlineBorder ? props.outlineBorder : '2px solid #191919'}
    --border-radius: ${props =>
      props.borderRadius ? props.borderRadius : '5px'};
    --flip-duration: ${props =>
      props.flipDuration ? props.flipDuraction : '1700ms'};
    --flip-bezier: ${props =>
      props.flipBezier
        ? props.flipBezier
        : 'cubic-bezier(0.82, 0.51, 0.67, 0.97)'};
        /* : 'cubic-bezier(0.71, 0.46, 0.49, 0.82)'}; */
        /* : 'cubic-bezier(0.82, 0.34, 0.51, 0.83)'}; */

  transition: all var(--flip-duration) var(--flip-bezier);
`;

const Card = styled.div`
  width: var(--card-width);
  height: var(--card-height);
  min-width: var(--card-width);
  min-height: var(--card-height);
  position: relative;

  transform-style: preserve-3d;
  transition: all var(--flip-duration) var(--flip-bezier);
  ${HoverAreaWrapper}:hover & {
    transform: rotateY(0.5turn);
  }

  /*
   * @outline 
   */
  &::before {
    content: '';
    position: absolute;
    top: var(--outline-padding);
    bottom: var(--outline-padding);
    right: var(--outline-padding);
    left: var(--outline-padding);
    border-radius: var(--border-radius);

    border: var(--outline-border);
    transform: var(--front-layer1);
  }
`;

const FrontBackStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  padding: 20px;
  border-radius: var(--border-radius);
  background-size: cover;
  background-blend-mode: overlay;
  box-shadow: 1px 3px 12px rgba(0, 0, 0, 0.15);

  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

const Front = styled.div`
  ${FrontBackStyles};

  background: var(--front-background);
  background-image: var(--front-img);
`;

const Back = styled.div`
  ${FrontBackStyles};

  background: var(--back-background);
  background-image: var(--back-img);
  transform: rotateY(0.5turn);
`;

const Title = styled.h2`
  font-size: 30px;
  transform: var(--front-layer3);
`;

const Subtitle = styled.p`
  font-size: 16px;
  transform: var(--front-layer2);
`;

const Body = styled.p`
  font-weight: bold;
  color: #595959;
  transform: var(--front-layer2);
`;

const Source = ({ title, subtitle, body, src, frontImg, backImg }) => {
  return (
    <HoverAreaWrapper frontImg={frontImg} backImg={backImg}>
      <Card>
        <Front>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Front>
        <Back>
          <Body>{body}</Body>
        </Back>
      </Card>
    </HoverAreaWrapper>
  );
};

export default Source;
