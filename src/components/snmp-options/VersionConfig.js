import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion, Form, Icon } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';

import { RFRadio, RFInput, RFSelect } from '../shared';
import { VERSIONS, ALGORITHMS, SECURITY_OPTIONS } from '../../constants';

class VersionConfig extends PureComponent {
  state = {
    isOpen: true,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render = () => {
    const { isOpen } = this.state;

    return (
      <Segment inverted>
        <Accordion inverted>
          <Accordion.Title active={isOpen} onClick={this.handleClick}>
            <Icon name="dropdown" />
            SNMP Version
          </Accordion.Title>
          <Accordion.Content active={isOpen}>
            <Form inverted>
              <Form.Field>
                <Field name="version" component={RFRadio} options={VERSIONS} />
              </Form.Field>
              <Field
                name="readCommunity"
                component={RFInput}
                label="Read Community"
                size="small"
              />
              <Field
                name="securityOptions"
                component={RFSelect}
                placeholder="Select security option"
                fluid
                selection
                options={SECURITY_OPTIONS}
              />
              <Field
                name="contextName"
                component={RFInput}
                label="Context Name"
                size="small"
              />
              <Field
                name="contextEngineID"
                component={RFInput}
                label="Context Engine ID"
                size="small"
              />
              <Field
                name="authenticationAlgorithm.code"
                component={RFRadio}
                options={ALGORITHMS}
              />
              <Field
                name="authenticationAlgorithm.password"
                component={RFInput}
                label="Authentication Password"
                size="small"
              />
            </Form>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  };
}

export default reduxForm({
  form: 'snmpConfig',
})(VersionConfig);
