import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'semantic-ui-react';

export const RFRadio = ({ input, meta, options, ...rest }) => (
  <React.Fragment>
    {options.map(({ id, label, value }) => (
      <Radio
        key={id}
        id={id}
        label={label}
        {...input}
        value={value}
        checked={value === input.value}
        // {...rest}
      />
    ))}
  </React.Fragment>
);

export default RFRadio;
