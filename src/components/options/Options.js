import React, { PureComponent } from 'react';
import { Segment, Accordion, Icon, Checkbox, Form } from 'semantic-ui-react';

const options = [
  {
    label: 'SNMP',
    value: 'SNMP',
  },
  {
    label: 'Link',
    value: 'Link',
  },
  {
    label: 'VLAN',
    value: 'VLAN',
  },
  {
    label: 'Ports',
    value: 'Ports',
  },
];

class Options extends PureComponent {
  state = {
    isOpen: false,
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
            Discovery Options
          </Accordion.Title>
          <Accordion.Content active={isOpen}>
            <Form inverted>
              {options.map(({ label, value }) => (
                <Form.Field key={value}>
                  <Checkbox label={label} />
                </Form.Field>
              ))}
            </Form>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  };
}

export default Options;
