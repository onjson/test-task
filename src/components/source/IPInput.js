import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

class IPIput extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
  };

  static defaultProps = {
    label: '',
  };

  state = {
    isValid: true,
  };

  onChange = () => {
    this.setState({
      isValid: true,
    });
  };

  onBlur = (e) => {
    const { value } = e.target;
    const isValid = this.validate(value);
    this.setState({
      isValid,
    });
  };

  validate = (value) => {
    const regExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g;
    return regExp.test(value) || value === '';
  };

  Label = (props) => (
    <span className={props.className}>{this.props.label}</span>
  );

  render = () => (
    <Form.Input
      label={this.props.label}
      onBlur={this.onBlur}
      onChange={this.onChange}
      error={!this.state.isValid}
      size="small"
    />
  );
}

export default IPIput;
