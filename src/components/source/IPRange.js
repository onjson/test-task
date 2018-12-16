import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { IPInput } from './index';

class IPRange extends PureComponent {
  static propTypes = {};

  render = () => (
    <React.Fragment>
      <IPInput label="Starting IP Address" />
      <IPInput label="Ending IP Address" />
    </React.Fragment>
  );
}

export default IPRange;
