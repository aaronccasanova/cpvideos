import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { injectGlobal } from 'styled-components';

injectGlobal`
:root {
  box-sizing: border-box;
  overflow-x: hidden;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
