import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion, Form, Icon } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import get from 'lodash.get';

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
            <span className={styles.label}>SNMP Version</span>
          </Accordion.Title>
          <Accordion.Content active={isOpen}>
            <Form inverted>
              <Form.Field>
                <Field
                  name="version"
                  component={RFRadio}
                  options={VERSIONS}
                  wrapperClassName={styles.radioGroup}
                />
              </Form.Field>
              {version && (
                <Field
                  name={`snmpv${version}.readCommunity`}
                  component={RFInput}
                  label="Read Community"
                  size="small"
                />
              )}
              {version === '3' && (
                <React.Fragment>
                  <Field
                    name={`snmpv${version}.securityOptions`}
                    component={RFSelect}
                    placeholder="Select security option"
                    fluid
                    selection
                    options={SECURITY_OPTIONS}
                  />
                  <Field
                    name={`snmpv${version}.contextName`}
                    component={RFInput}
                    label="Context Name"
                    size="small"
                  />
                  <Field
                    name={`snmpv${version}.contextEngineID`}
                    component={RFInput}
                    label="Context Engine ID"
                    size="small"
                  />
                  <Form.Field>
                    <label className={styles.label}>
                      Authentication Algorithm
                    </label>
                    <Field
                      wrapperClassName={styles.radioGroup}
                      name={`snmpv${version}.authenticationAlgorithm.code`}
                      component={RFRadio}
                      options={ALGORITHMS}
                    />
                  </Form.Field>
                  <Field
                    name={`snmpv${version}.authenticationAlgorithm.password`}
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

VersionConfig.propTypes = {
  version: PropTypes.string,
};

VersionConfig.defaultProps = {
  version: null,
};

const mapStateToProps = (state) => ({
  version: get(state, 'form.snmpConfig.values.version', null),
});

const ConnectedVersionConfig = connect(mapStateToProps)(VersionConfig);

export default reduxForm({
  form: 'snmpConfig',
  destroyOnUnmount: false,
})(ConnectedVersionConfig);
