import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { IPInput } from './index';

class IPRange extends PureComponent {
  static propTypes = {};

  render = () => (
    <React.Fragment>
      <IPInput name="startIPAddress" label="Starting IP Address" />
      <IPInput name="endIPAddress" label="Ending IP Address" />
    </React.Fragment>
  );
}

export default IPRange;
