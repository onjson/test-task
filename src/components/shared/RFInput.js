import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const RFInput = ({ input, meta: { touched, error }, label, size }) => (
  <Form.Input {...input} label={label} size={size} error={touched && !!error} />
);

RFInput.propTypes = {
  label: PropTypes.string,
};

RFInput.defaultProps = {
  label: '',
};

export default RFInput;
