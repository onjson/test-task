import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion, Form, Icon } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';

import { RFRadio, RFInput, RFSelect } from '../shared';
import { VERSIONS, ALGORITHMS, SECURITY_OPTIONS } from '../../constants';

import styles from './VersionConfig.module.css';

class VersionConfig extends PureComponent {
  state = {
    isOpen: true,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render = () => {
    const { isOpen } = this.state;
    const { version } = this.props;

    return (
      <Segment inverted>
        <Accordion inverted>
          <Accordion.Title
            active={isOpen}
            onClick={this.handleClick}
            className={styles.title}
          >
            <Icon name="dropdown" />
            SNMP Version
          </Accordion.Title>
          <Accordion.Content active={isOpen}>
            <Form inverted>
              <Form.Field className={styles.radioGroup}>
                <Field name="version" component={RFRadio} options={VERSIONS} />
              </Form.Field>
              {version && (
                <Field
                  name="readCommunity"
                  component={RFInput}
                  label="Read Community"
                  size="small"
                />
              )}
              {version === '3' && (
                <React.Fragment>
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
                  <Form.Field className={styles.radioGroup}>
                    <Field
                      name="authenticationAlgorithm.code"
                      component={RFRadio}
                      options={ALGORITHMS}
                    />
                  </Form.Field>
                  <Field
                    name="authenticationAlgorithm.password"
                    component={RFInput}
                    label="Authentication Password"
                    size="small"
                  />
                </React.Fragment>
              )}
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
