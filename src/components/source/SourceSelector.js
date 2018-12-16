import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';

import { SOURCES } from '../../constants';

class SourceSelector extends PureComponent {
  render = () => (
    <Select placeholder="Select source" fluid selection options={SOURCES} />
  );
}

export default SourceSelector;
