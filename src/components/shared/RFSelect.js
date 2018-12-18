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

RFSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RFSelect;
