import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';

import { IPInput } from './index';
import { reduxFormActions } from '../../actions';
import { utils } from '../../helpers';

const { customValidateFailure, customValidateSuccess } = reduxFormActions;

const message =
  'Starting IP address cannot be larger than the Ending IP Address.';

class IPRange extends PureComponent {
  componentDidUpdate = () => {
    const { isValidStartIP, isValidEndIP, startIP, endIP } = this.props;

    if (isValidStartIP && isValidEndIP) {
      if (utils.ip2int(startIP) < utils.ip2int(endIP)) {
        this.props.customValidateSuccess('ipRange');
      } else {
        this.props.customValidateFailure('ipRange', message);
      }
    }
  };

  render = () => (
    <React.Fragment>
      <IPInput name="startIPAddress" label="Starting IP Address" />
      <IPInput name="endIPAddress" label="Ending IP Address" />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  const startIP = get(state, 'form.source.values.startIPAddress', null);
  const endIP = get(state, 'form.source.values.endIPAddress', null);
  const startIPError = !!get(
    state,
    'form.source.syncErrors.startIPAddress',
    false,
  );
  const endIPError = !!get(state, 'form.source.syncErrors.endIPAddress', false);
  const touchedStartIP = get(
    state,
    'form.source.fields.startIPAddress.touched',
    false,
  );
  const touchedEndIP = get(
    state,
    'form.source.fields.endIPAddress.touched',
    false,
  );

  return {
    startIP,
    endIP,
    isValidStartIP: startIP && touchedStartIP && !startIPError,
    isValidEndIP: endIP && touchedEndIP && !endIPError,
  };
};

const mapDispatchTopProps = (dispatch) =>
  bindActionCreators(
    { customValidateFailure, customValidateSuccess },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchTopProps,
)(IPRange);
