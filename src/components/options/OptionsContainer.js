import React from 'react';
import { connect } from 'react-redux';

import { Options } from './index';

const OptionsContainer = () => <Options />;

export default connect()(OptionsContainer);
