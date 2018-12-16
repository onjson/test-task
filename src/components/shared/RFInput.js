import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const RFInput = ({ input, label, size }) => (
  <Form.Input {...input} label={label} size={size} />
);

export default RFInput;
