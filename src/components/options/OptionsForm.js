import React from 'react';
import { Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';

import { RFCheckbox } from '../shared';
import { OPTIONS } from '../../constants';

const OptionsForm = () => (
  <Form inverted>
    {OPTIONS.map(({ label, value }) => (
      <Field key={value} name={label} label={label} component={RFCheckbox} />
    ))}
  </Form>
);

export default reduxForm({
  form: 'options',
  destroyOnUnmount: false,
})(OptionsForm);
