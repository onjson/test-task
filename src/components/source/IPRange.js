import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';

import { IPInput } from './index';
import {
  validateIpRangeFailure,
  validateIpRangeSuccess,
} from '../../actions/actions';

const message =
  'Starting IP address cannot be larger than the Ending IP Address.';

const ip2int = (ip) =>
  // eslint-disable-next-line
  ip
    .split('.')
    .reduce((ipInt, octet) => 
      // eslint-disable-next-line
      (ipInt << 8) + parseInt(octet, 10),
    0,
  ) >>> 0;

class IPRange extends PureComponent {
  componentDidUpdate = () => {
    const { isValidStartIP, isValidEndIP, startIP, endIP } = this.props;

    if (isValidStartIP && isValidEndIP) {
      if (ip2int(startIP) < ip2int(endIP)) {
        this.props.validateIpRangeSuccess();
      } else {
        this.props.validateIpRangeFailure(message);
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
    { validateIpRangeFailure, validateIpRangeSuccess },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchTopProps,
)(IPRange);
