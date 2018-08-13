import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Archivo+Black');
  /* ---- CSS Variables Section ----- */
  --size: ${props => (props.size ? props.size : '200px')};
  --speed: ${props => (props.speed ? props.speed : '350ms')};
  --color: #f3f3f3;
  /* -------------------------------- */
  font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  width: var(--size);
  height: var(--size);
  background: #222;

  * {
    color: var(--color);
  }

  /* inset outline */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid var(--color);
    opacity: 0.8;
    z-index: 3;
    width: 85%;
    height: 85%;
  }

  /* overlay */
  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity var(--speed);
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  filter: ${props => (props.grayscale ? 'grayscale(100%)' : null)};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  color: var(--color);
  object-fit: cover;
`;

const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 25%;
  right: 25%;
  z-index: 4;
  text-align: center;
  transform: translateY(0%);
  transition: transform var(--speed) cubic-bezier(0.53, 0.2, 0.38, 0.81);

  ${Wrapper}:hover & {
    transition: transform var(--speed) cubic-bezier(0.65, -0.01, 0.54, 0.97);
    transform: translateY(-50%);
  }
`;

const Title = styled.div`
  font-family: 'Archivo Black', sans-serif;
  text-transform: uppercase;
  position: relative;
  width: 100%;
  font-size: calc(var(--size) / 10);
  line-height: 1;
  opacity: 0.8;
  transition: opacity var(--speed) cubic-bezier(0.52, 0.12, 0.57, 0.67);

  /* title underline */
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin: 7% auto 8% auto;
    background-color: var(--color);
    opacity: 0.8;
    transform: scale(0);
    transition: transform calc(var(--speed) / 2);
  }

  ${Wrapper}:hover & {
    opacity: 1;

    &::after {
      transform: scale(1);
      transition: transform calc(var(--speed) / 2) calc(var(--speed) / 2);
    }
  }
`;

const Subtitle = styled.div`
  font-size: calc(var(--size) / 20);
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity calc(var(--speed) / 2);

  ${Wrapper}:hover & {
    opacity: 0.8;
    transition: opacity calc(var(--speed) / 2) calc(var(--speed) / 2);
  }
`;

const Source = ({ title, subtitle, src, size, speed, grayscale }) => {
  return (
    <Wrapper size={size} speed={speed}>
      <Img src={src} alt={title} grayscale={grayscale} />
      <TitleWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleWrapper>
    </Wrapper>
  );
};

export default Source;

// src="https://images.pexels.com/photos/840326/pexels-photo-840326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// src="https://www.dropbox.com/s/8cc22nblu4y4vzi/jenny.jpeg?raw=1"
