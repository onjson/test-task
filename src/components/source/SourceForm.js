import React from 'react';
import PropTypes from 'prop-types';
import { Form, Message } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { SOURCES } from '../../constants';

import { RFSelect } from '../shared';
import { FileLoader, IPInput, IPRange } from './index';

const SourceForm = ({ source, ipRangeError }) => (
  <Form error={!!ipRangeError} inverted onSubmit={(e) => e.preventDefault()}>
    <Field
      name="inputType"
      component={RFSelect}
      placeholder="Select source"
      fluid
      selection
      options={SOURCES}
    />
    {source === 'CSV' && <Field name="fileName" component={FileLoader} />}
    {source === 'IP' && <IPInput name="ipAddress" label="IP" />}
    {source === 'IP Range' && <IPRange />}
    {ipRangeError && (
      <Message error header="IP Range Error" content={ipRangeError} />
    )}
  </Form>
);

SourceForm.propTypes = {
  source: PropTypes.string,
  ipRangeError: PropTypes.string,
};

SourceForm.defaultProps = {
  source: null,
  ipRangeError: null,
};

export default reduxForm({
  form: 'source',
})(SourceForm);
