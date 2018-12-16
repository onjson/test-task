import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion, Icon, Form } from 'semantic-ui-react';

import { SourceSelector, FileLoader, IPInput, IPRange } from './index';

class Source extends PureComponent {
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
            What is a dog?
          </Accordion.Title>
          <Accordion.Content active={isOpen}>
            <Form inverted onSubmit={(e) => e.preventDefault()}>
              <SourceSelector />
              <FileLoader />
              <IPInput label="IP" />
              <IPRange />
            </Form>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  };
}

export default Source;