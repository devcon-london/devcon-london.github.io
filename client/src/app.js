import './styles/styles.css';

import React from 'react';

import Form from './components/form/form.js';

var formId = process.env.NODE_ENV === 'development' ? '1gNrrrv8vzIk2tJFDB0Nd3XZzCODCZNn1Q7MxXKQ1hes' : '1FvacYUr7XxypGawVUOquLRdoH_QNy1wRxiCMZ6SN304';

React.render(
  <Form id={formId} />,
  document.getElementById('app')
);
