import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { Source } from './index';

const SourceContainer = ({ source, ipRangeError }) => (
  <Source source={source} ipRangeError={ipRangeError} />
);

const mapStateToProps = (state) => ({
  source: get(state, 'form.source.values.inputType', null),
  ipRangeError: get(state, 'form.source.syncErrors.ipRange', null),
});

export default connect(mapStateToProps)(SourceContainer);
