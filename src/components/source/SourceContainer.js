import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Source } from './index';

const SourceContainer = () => <Source />;

export default connect()(SourceContainer);
