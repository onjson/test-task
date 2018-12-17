import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';

const RFSelect = ({ input, meta, ...rest }) => (
  <Select
    {...input}
    style={{ marginBottom: '1em' }}
    onChange={(event, data) => input.onChange(data.value)}
    {...rest}
  />
);

export default RFSelect;
