import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion, Icon } from 'semantic-ui-react';

import { VersionConfig } from './index';

class SNMPOptions extends PureComponent {
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
            Selected Options
          </Accordion.Title>
          <Accordion.Content active={isOpen}>
            <VersionConfig />
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  };
}

export default SNMPOptions;
