import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { RFInput } from '../shared';
import { validators } from '../../helpers';

const IPIput = ({ label, name }) => (
  <Field
    name={name}
    label={label}
    validate={validators.ip}
    size="small"
    component={RFInput}
  />
);

IPIput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

IPIput.defaultProps = {
  name: '',
  label: '',
};

export default IPIput;
