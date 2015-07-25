import './styles/styles.css';

import React from 'react';

import Form from './components/form/form.js';

var devConFormId = '1FvacYUr7XxypGawVUOquLRdoH_QNy1wRxiCMZ6SN304';
var testFormId = '1gNrrrv8vzIk2tJFDB0Nd3XZzCODCZNn1Q7MxXKQ1hes';
React.render(
  <Form id={testFormId} />,
  document.getElementById('app')
);
