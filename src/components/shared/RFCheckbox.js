import React from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'semantic-ui-react';

const RFCheckbox = ({ input, label, meta, ...rest }) => (
  <Form.Field>
    <Checkbox
      label={label}
      checked={!!input.value}
      onClick={(event, data) => input.onChange(data.checked)}
      {...rest}
    />
  </Form.Field>
);

export default RFCheckbox;
