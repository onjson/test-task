import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { SNMPOptions } from './index';

const SNMPOptionsContainer = ({ version }) => <SNMPOptions version={version} />;

const mapStateToProps = (state) => ({
  version: get(state, 'form.snmpConfig.values.version', null),
});

export default connect(mapStateToProps)(SNMPOptionsContainer);
