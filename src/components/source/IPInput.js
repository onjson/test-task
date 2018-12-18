import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { RFInput } from '../shared';
import { validators } from '../../helpers';

class IPIput extends PureComponent {
  Label = (props) => (
    <span className={props.className}>{this.props.label}</span>
  );

  render = () => (
    <Field
      name={this.props.name}
      label={this.props.label}
      validate={validators.ip}
      size="small"
      component={RFInput}
    />
  );
}

export default IPIput;
