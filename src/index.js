import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { injectGlobal } from 'styled-components';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500');
:root {
  box-sizing: border-box;
  overflow-x: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
}

*::before,
*::after {
  box-sizing: border-box;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
