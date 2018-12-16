import React, { PureComponent } from 'react';
import { Segment, Accordion, Icon } from 'semantic-ui-react';

import { OptionsForm } from './index';

class Options extends PureComponent {
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
            Discovery Options
          </Accordion.Title>
          <Accordion.Content active={isOpen}>
            <OptionsForm />
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  };
}

export default Options;
