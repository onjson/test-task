import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion, Form, Icon, Radio } from 'semantic-ui-react';

import { VERSIONS, ALGORITHMS } from '../../constants';

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
                {VERSIONS.map(({ label, value, name }) => (
                  <Radio key={label} label={label} name={name} value={value} />
                ))}
              </Form.Field>
              <Form.Input label="Read Community" size="small" />
              <Form.Select
                fluid
                selection
                options={[{ text: 'hello', value: 'hello' }]}
              />
              <Form.Input label="Context Name" size="small" />
              <Form.Input label="Context Engine ID" size="small" />
              {ALGORITHMS.map(({ label, value, name }) => (
                <Radio key={label} label={label} name={name} value={value} />
              ))}
              <Form.Input label="Authentication Password" size="small" />
            </Form>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  };
}

export default VersionConfig;
