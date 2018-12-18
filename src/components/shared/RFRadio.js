import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'semantic-ui-react';

export const RFRadio = ({ input, options }) => (
  <React.Fragment>
    {options.map(({ id, label, value }) => (
      <Radio
        key={id}
        id={id}
        label={label}
        {...input}
        value={value}
        checked={value === input.value}
      />
    ))}
  </React.Fragment>
);

RFRadio.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RFRadio;
