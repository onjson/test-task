import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { RFInput } from '../shared';

const validate = (value) => {
  const regExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g;
  return regExp.test(value) || value === '';
};

class IPIput extends PureComponent {
  Label = (props) => (
    <span className={props.className}>{this.props.label}</span>
  );

  render = () => (
    <Field
      name={this.props.name}
      label={this.props.label}
      size="small"
      component={RFInput}
      validate={validate}
    />
  );
}

export default IPIput;
