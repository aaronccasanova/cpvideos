import React from 'react';
import styled, { css } from 'styled-components';

const commonPseudoStyles = css`
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: multiply;
`;

const Text = styled.h1`
  /* ---- CSS Variables Section ----- */
  --blue: #0091e5;
  --red: #e42149;
  --yellow: #fff146;
  /* -------------------------------- */
  font-family: 'Arimo', sans-serif;
  display: inline-block;
  color: var(--red);
  font-size: ${props =>
    props.size
      ? props.size
      : 'calc(50px + (192 - 50) * (100vw - 320px) / (1500 - 320))'};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: calc(0px + (-16 - 0) * (100vw - 320px) / (1500 - 320));
  /* letter-spacing: -0.1em; */

  position: relative;

  &::before {
    ${commonPseudoStyles};
    color: var(--blue);
    transform: ${props =>
      props.spread
        ? `translateX(calc(${props.spread} * -1))`
        : `translateX(calc(calc(4px + (16 - 4) * (100vw - 320px) / (1500 - 320)) * -1))`};
  }

  &::after {
    ${commonPseudoStyles};
    color: var(--yellow);
    transform: ${props =>
      props.spread
        ? `translateX(${props.spread})`
        : `translateX(calc(4px + (16 - 4) * (100vw - 320px) / (1500 - 320)))`};
  }
`;

const TextMultiply = props => {
  const { text, size, spread } = props;
  return (
    <Text data-text={text} size={size} spread={spread}>
      {text}
    </Text>
  );
};

export default TextMultiply;

//* ------ Usage ------ *//
/*
<TextMultply
  text="gonzo"
  size="calc(50px + (192 - 50) * (100vw - 320px) / (1500 - 320))"
  spread="calc(5px + (16 - 5) * (100vw - 320px) / (1500 - 320))"
/> 
*/
/* <TextMultply text="create" /> */
/* <TextMultply text="create" size="192px" spread="16px" /> */
/* <AniHeaderCard text="wow" /> */
/* <AniHeaderCard text="love" /> */
/* <AniHeaderCard text="hello" /> */
