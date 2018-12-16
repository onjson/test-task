import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion, Icon } from 'semantic-ui-react';

import { SourceForm } from './index';

class Source extends PureComponent {
  state = {
    isOpen: true,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render = () => {
    const { isOpen } = this.state;
    const { source, ipRangeError } = this.props;

    return (
      <Segment inverted>
        <Accordion inverted>
          <Accordion.Title active={isOpen} onClick={this.handleClick}>
            <Icon name="dropdown" />
            Discovery Source
          </Accordion.Title>
          <Accordion.Content active={isOpen}>
            <SourceForm source={source} ipRangeError={ipRangeError} />
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  };
}

export default Source;
