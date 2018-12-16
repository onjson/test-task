import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { SOURCES } from '../../constants';

import { RFSelect } from '../shared';
import { FileLoader, IPInput, IPRange } from './index';

const SourceForm = () => (
  <Form inverted onSubmit={(e) => e.preventDefault()}>
    <Field
      name="inputType"
      component={RFSelect}
      placeholder="Select source"
      fluid
      selection
      options={SOURCES}
    />
    <FileLoader />
    <IPInput name="ipAdress" label="IP" />
    <IPRange />
  </Form>
);

export default reduxForm({
  form: 'source',
})(SourceForm);
