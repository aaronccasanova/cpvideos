import React from 'react';
import styled from 'styled-components';

const IconCreditWrapper = styled.div`
  font-size: 10px;
  > * {
    font-size: 10px;
  }
`;

const IconCreditWrapper = () => {
  return (
    <div>
      <IconCreditWrapper>
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/google"
          title="Cut content button"
        >
          Cut content button
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{' '}
        is licensed by{' '}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
        >
          CC 3.0 BY
        </a>
      </IconCreditWrapper>
    </div>
  );
};

export default IconCreditWrapper;
